import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { caracteristiques } from '../caracteristiques';
import { modeles } from '../modeles';
import { CaracteristiqueService } from '../service/caracteristique.service';
import { ModelService } from '../service/model.service';
@Component({
  selector: 'app-detail-caracteristique',
  templateUrl: './detail-caracteristique.component.html',
  styleUrls: ['./detail-caracteristique.component.scss']
})
export class DetailCaracteristiqueComponent implements OnInit {
  id: number;
  caract:caracteristiques;

  model:modeles;
  nom_model:string;
  modelId:number;

  constructor(public caractService:CaracteristiqueService ,
    private route:ActivatedRoute,

     private modelService:ModelService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['caractId'];

    this.caractService.find(this.id).subscribe((data:caracteristiques)=>{
      this.caract= data;
      this.modelId=this.caract.id_mod
      console.log("id",this.modelId);
    });

    setTimeout(() => {
      this.modelService.find(this.modelId).subscribe((result)=>{
      this.model=result
      console.log("a",result);

      this.nom_model=this.model.desgnModele
      })
      console.log("nom",this.nom_model);
      }, 1000);
  }

}
