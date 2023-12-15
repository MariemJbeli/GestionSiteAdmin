import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ModelService } from '../service/model.service';
import { modeles } from '../modeles';
import { CategorieService } from '../service/categorie.service';
import { categories } from '../categories';
import { CaracteristiqueService } from '../service/caracteristique.service';
import { caracteristiques } from '../caracteristiques';


@Component({
  selector: 'app-detail-model',
  templateUrl: './detail-model.component.html',
  styleUrls: ['./detail-model.component.scss']
})
export class DetailModelComponent implements OnInit {
  id:number;
  model:modeles;

  categorie: categories;
  nom_categorie:string;
  categorieId:number;

  caract: caracteristiques;
  desgn_caract:string;
  lib_caract:string;
  caractId:number;
  c:caracteristiques[]=[];

  selectedM:number;

  constructor(public modelService:ModelService ,
    private route:ActivatedRoute ,
    private router:Router,
    private categorieService:CategorieService ,
    private caractService:CaracteristiqueService) { }

  ngOnInit(): void {
    this.caractService.getAll().subscribe((data: caracteristiques[])=>{
      this.modelService.showcaracteristique(this.id).subscribe((data: caracteristiques[])=>{
        this.c = data;
      console.log(this.c);
      })

    });

    this.id = this.route.snapshot.params['modelId'];

    this.modelService.find(this.id).subscribe((data:modeles)=>{
      this.model=data;
      this.categorieId=this.model.id_cat
      console.log("id",this.categorieId)
    });

    setTimeout(() => {
      this.categorieService.find(this.categorieId).subscribe((result)=>{
      this.categorie=result
      console.log("a",result);

      this.nom_categorie=this.categorie.nom_categ
      })
      console.log("nom",this.nom_categorie);

      }, 1000);
  }

}
