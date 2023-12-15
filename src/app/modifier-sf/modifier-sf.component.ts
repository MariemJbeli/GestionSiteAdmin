import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { sous_familles } from '../sous_familles';
import { SousFamilleService } from '../service/sous-famille.service';
@Component({
  selector: 'app-modifier-sf',
  templateUrl: './modifier-sf.component.html',
  styleUrls: ['./modifier-sf.component.scss']
})
export class ModifierSFComponent implements OnInit {
  id!:number;
  sousf!:sous_familles;
  form!: FormGroup;
  constructor(public sousFamilleService:SousFamilleService ,  private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['sfId'];

    this.sousFamilleService.find(this.id).subscribe((data:sous_familles)=>{
      this.sousf = data;
    });

    this.form= new FormGroup({
      nomSF: new FormControl('', Validators.required),
      id_F: new FormControl('', Validators.required)
    });
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.sousFamilleService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('sousFamille updated successfully!');
         this.router.navigateByUrl('/sous-famille');
    })
  }

}
