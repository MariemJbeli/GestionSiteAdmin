import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { modeles } from '../modeles';
import { ModelService } from '../service/model.service';

@Component({
  selector: 'app-modifier-model',
  templateUrl: './modifier-model.component.html',
  styleUrls: ['./modifier-model.component.Scss']
})
export class ModifierModelComponent implements OnInit {
  id!:number;
  model!:modeles;
  form!: FormGroup;
  constructor(public modelService:ModelService ,  private route: ActivatedRoute, private router:Router ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['modelId'];

    this.modelService.find(this.id).subscribe((data:modeles)=>{
      this.model = data;
    });

    this.form= new FormGroup({
      desgnModele: new FormControl('', Validators.required),
      id_cat: new FormControl('', Validators.required)
    });
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.modelService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('model updated successfully!');
         this.router.navigateByUrl('/model');
    })
  }

}
