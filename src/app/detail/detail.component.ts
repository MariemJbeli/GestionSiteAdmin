
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { articles } from '../articles';
import { art_caracts } from '../art_caracts';
import { CaracteristiqueComponent } from '../caracteristique/caracteristique.component';
import { caracteristiques } from '../caracteristiques';
import { ArticleService } from '../service/article.service';
import { CaracteristiqueService } from '../service/caracteristique.service';
import { SousFamilleService } from '../service/sous-famille.service';
import { sous_familles } from '../sous_familles';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  sousfamille:sous_familles;
  nom_Sous_Famille:string
  id:number;
  article:articles;
sousFamilleId:number;
caractId:number;
art:articles[]=[];
sf:sous_familles[]=[];
arca:art_caracts;
selectedA:number;
artcaract:art_caracts[]=[];
caract:caracteristiques;
nomCaract:string;
idCaract:number;

image:string=null;

  constructor( public articleService:ArticleService , private route:ActivatedRoute,
    private caractService:CaracteristiqueService,

     private sous_famille_service:SousFamilleService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['articleId'];

    this.articleService.find(this.id).subscribe((data:articles)=>{
      this.article= data;
      this.sousFamilleId=this.article.id_SF
      console.log("id",this.sousFamilleId);

      this.article.image = this.article.image.slice(12)
      console.log(this.article.image)
    });

    this.articleService.showcaracteristique(this.id).subscribe((data:art_caracts[])=>{
      this.artcaract= data;
      console.log("caract",this.artcaract);
    })


      setTimeout(() => {
      this.sous_famille_service.find(this.sousFamilleId).subscribe((result)=>{
      this.sousfamille=result
      console.log("a",result);
      this.nom_Sous_Famille=this.sousfamille.nomSF
      })
      console.log("nom",this.nom_Sous_Famille);

      this.caractService.find(this.artcaract[0].id_caract).subscribe((data)=>{
        this.caract= data
        console.log(data);
        this.nomCaract=this.caract.desgnCaract

      })
      console.log("nomCaract",this.nomCaract);
      }, 1000);

  }

  }
