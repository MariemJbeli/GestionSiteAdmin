import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { familles } from '../familles';
import { FamilleService } from '../service/famille.service';

@Component({
  selector: 'app-modifier-famille',
  templateUrl: './modifier-famille.component.html',
  styleUrls: ['./modifier-famille.component.scss']
})
export class ModifierFamilleComponent implements OnInit {
  id!:number;
  famille!:familles;
  form!: FormGroup;

  constructor(public familleService:FamilleService , private route: ActivatedRoute, private router:Router ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['familleId'];

    this.familleService.find(this.id).subscribe((data:familles)=>{
      this.famille = data;
    });

    this.form= new FormGroup({
      nomF: new FormControl('', Validators.required),
      id_cat: new FormControl('', Validators.required)
    });
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.familleService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('famille updated successfully!');
         this.router.navigateByUrl('/famille');
    })
  }

}
