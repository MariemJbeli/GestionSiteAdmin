import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

import {sous_familles } from '../sous_familles';
import { SousFamilleService } from '../service/sous-famille.service';
import { familles } from '../familles';

@Component({
  selector: 'app-ajout-sf',
  templateUrl: './ajout-sf.component.html',
  styleUrls: ['./ajout-sf.component.scss']
})
export class AjoutSFComponent implements OnInit {
  form!:FormGroup;
  famille:familles[]=[];
  sousfamille: sous_familles[]=[];
  constructor(public sousFamilleService:SousFamilleService ,  private router:Router) { }

  ngOnInit(): void {
    this.sousFamilleService.getF().subscribe((data: familles[])=>{
      this.famille = data;
      console.log(this.famille);
    })

    this.form = new FormGroup({
      nomSF: new FormControl('', [Validators.required]),
      id_F:  new FormControl(this.famille[0])
  });
  }
  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.sousFamilleService.create(this.form.value).subscribe((res:any) => {
         console.log('sousFamille created successfully!');
         this.router.navigateByUrl('/sous-famille');
    })
  }

}
