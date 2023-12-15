import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

import { CaracteristiqueService } from '../service/caracteristique.service';
import { caracteristiques } from '../caracteristiques';
import { modeles } from '../modeles';

@Component({
  selector: 'app-ajout-caracteristique',
  templateUrl: './ajout-caracteristique.component.html',
  styleUrls: ['./ajout-caracteristique.component.scss']
})
export class AjoutCaracteristiqueComponent implements OnInit {
  form!: FormGroup;
  model: modeles[]=[];
  caract: caracteristiques[]=[];

  constructor(public caractService:CaracteristiqueService ,  private router:Router ) { }

  ngOnInit(): void {
    this.caractService.getM().subscribe((data: modeles[])=>{
      this.model = data;
      console.log(this.model);
    });

    this.form = new FormGroup({
      desgnCaract: new FormControl('', [Validators.required]),
      libelle: new FormControl('', [Validators.required]),
      id_mod: new FormControl(this.model[0])
  });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.caractService.create(this.form.value).subscribe((res:any) => {
         console.log('caract created successfully!');
         this.router.navigateByUrl('/caracteristique');
    })
  }

}
