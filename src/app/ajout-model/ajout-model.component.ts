import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

import { ModelService } from '../service/model.service';
import { modeles } from '../modeles';
import { categories } from '../categories';

@Component({
  selector: 'app-ajout-model',
  templateUrl: './ajout-model.component.html',
  styleUrls: ['./ajout-model.component.scss']
})
export class AjoutModelComponent implements OnInit {
  form!:FormGroup;
  model: modeles[]=[];
  categ:categories[]=[];

  constructor(public modelService:ModelService ,  private router:Router ) { }

  ngOnInit(): void {
    this.modelService.getCateg().subscribe((data: categories[])=>{
      this.categ = data;
      console.log(this.categ);
    })

    this.form = new FormGroup({
      desgnModele: new FormControl('', [Validators.required]),
      id_cat: new FormControl(this.categ[0])
  });
  }
  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.modelService.create(this.form.value).subscribe((res:any) => {
         console.log('model created successfully!');
         this.router.navigateByUrl('/model');
    })
  }

}
