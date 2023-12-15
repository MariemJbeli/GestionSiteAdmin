import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { categories } from '../categories';
import { familles } from '../familles';
import { CategorieService } from '../service/categorie.service';
import { FamilleService } from '../service/famille.service';

@Component({
  selector: 'app-detail-famille',
  templateUrl: './detail-famille.component.html',
  styleUrls: ['./detail-famille.component.scss']
})
export class DetailFamilleComponent implements OnInit {
id:number;
famille:familles;
ff:familles[];
familles:familles[]=[];

categorie: categories;
nom_categorie:string;
categorieId:number;

categ:categories[]=[];

  constructor(public familleService:FamilleService,
      private route:ActivatedRoute ,
      private router:Router,
      private categorieService:CategorieService) { }

  ngOnInit(): void {
    this.categorieService.getAll().subscribe((data: categories[])=>{
      this.categ = data;
      console.log(this.categ);
    })

    this.familleService.getAll().subscribe((data: familles[])=>{
      this.familles = data;
      console.log(this.familles);
    })
    this.id = this.route.snapshot.params['familleId'];

    this.familleService.find(this.id).subscribe((data:familles)=>{
      this.famille=data;
      this.categorieId=this.famille.id_cat
      console.log("id",this.categorieId)
    });

    setTimeout(() => {
      this.categorieService.find(this.id).subscribe((result)=>{
      this.categorie=result
      console.log("a",result);

      this.nom_categorie=this.categorie.nom_categ
      })
      console.log("nom",this.nom_categorie);
      }, 1000);
  }

}
