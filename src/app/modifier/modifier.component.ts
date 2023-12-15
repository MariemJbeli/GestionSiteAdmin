import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { articles} from '../articles';
import { art_caracts } from '../art_caracts';
import { caracteristiques } from '../caracteristiques';
import { categories } from '../categories';
import { modeles } from '../modeles';
import { ArticleService } from '../service/article.service';
import { CaracteristiqueService } from '../service/caracteristique.service';
import { CategorieService } from '../service/categorie.service';
import { ModelService } from '../service/model.service';
import { sous_familles } from '../sous_familles';

@Component({
  selector: 'app-edit',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.scss']
})
export class ModifierComponent implements OnInit {
  alert:boolean=false;
  alertM:boolean=false;

  id:number;
  idcaract:number;
  article:articles;
  artcaract:art_caracts;
  sousf:sous_familles;
  form!: FormGroup;
  sf:sous_familles[]=[];
  mod:modeles[]=[];
  caract:caracteristiques[]=[];
  caractt:caracteristiques[]=[];
  categorie:categories[]=[];

  idartcaract:string;
  public idValue;
  constructor( public articleService: ArticleService,
     private route: ActivatedRoute,
     private modelService:ModelService,
     private caractService:CaracteristiqueService,
     private catService:CategorieService) {
      this.route.queryParams.subscribe(params =>{
        this.idartcaract = params['id'];
      })
      }

  ngOnInit(): void {

    this.idValue = this.route.snapshot.queryParamMap.get('idcaract');

    console.log('this id Value = '+this.idValue);

    this.catService.getAll().subscribe((data: categories[])=>{
      this.categorie = data;
      console.log(this.categorie);
    })

    this.modelService.getAll().subscribe((data: modeles[])=>{
      this.mod = data;
      console.log(this.mod);
    })
    this.caractService.getAll().subscribe((data: caracteristiques[])=>{
      this.caract = data;
      console.log(this.caract);

    })



    this.id = this.route.snapshot.params['articleId'];

    this.articleService.find(this.id).subscribe((data:articles)=>{
      this.articleService.getCaractbyArt(this.id).subscribe((data:caracteristiques[])=>{
        this.caract=data;
      })
      this.article = data;
    });

    this.idcaract = this.route.snapshot.params['artcaractId'];

    this.articleService.findArtCaract(this.id).subscribe((data:art_caracts)=>{
      this.artcaract = data;
    });
    this.idartcaract = this.route.snapshot.paramMap.get('idcaract');

    this.form= new FormGroup({
      desgnArt: new FormControl('' ),
      prix: new FormControl('' ),
      ancienPrix: new FormControl(''),
      etat: new FormControl(''),
      dureeGarantie: new FormControl(''),
      refInternational: new FormControl('',),
      livraison: new FormControl(''),
      image: new FormControl(''),
      id_SF: new FormControl(this.sf[0]),

      valeur: new FormControl(''),
      id_art:new FormControl(''),

      id_caract:  new FormControl(this.caract[0]),

    });



  }


  get f(){
    return this.form.controls;
  }

  submitM(){
    console.log(this.form.value);
    this.articleService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('article updated successfully!');
         this.alertM=true;

    })
  }
  submitA(){
    console.log(this.form.value);
    this.articleService.createArtCaract(this.form.value).subscribe((res:any) => {
         console.log('Article Caracteristiques created successfully!');
      this.alert=true;
    })
  }

  closeAlert(){
    this.alert=false;
    this.alertM=false;
  }

 
}

