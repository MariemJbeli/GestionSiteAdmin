import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { sous_familles } from '../sous_familles';
import { SousFamilleService } from '../service/sous-famille.service';
import { familles } from '../familles';
import { FamilleService } from '../service/famille.service';

@Component({
  selector: 'app-detail-sf',
  templateUrl: './detail-sf.component.html',
  styleUrls: ['./detail-sf.component.scss']
})
export class DetailSFComponent implements OnInit {
  id:number;
  sousf:sous_familles;
  fa:familles[]=[];

  famille:familles;
  nom_famille:string;
  familleId:number;

  constructor(public sousFamilleService:SousFamilleService ,
     private route:ActivatedRoute,
     private router:Router,
     private familleService:FamilleService) { }

  ngOnInit(): void {
    this.familleService.getAll().subscribe((data: familles[])=>{
      this.fa = data;
      console.log(this.fa);
    })

    this.id = this.route.snapshot.params['sfId'];

    this.sousFamilleService.find(this.id).subscribe((data:sous_familles)=>{
      this.sousf= data;
      this.familleId=this.sousf.id_F
      console.log("id",this.familleId);
    });

    setTimeout(() => {
      this.familleService.find(this.familleId).subscribe((result)=>{
      this.famille=result
      console.log("a",result);

      this.nom_famille=this.famille.nomF
      })
      console.log("nom",this.nom_famille);
      }, 1000);
  }

}
