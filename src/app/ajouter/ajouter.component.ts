import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { ArticleService } from '../service/article.service';

import { sous_familles } from '../sous_familles';
import { familles } from '../familles';
import { categories } from '../categories';

import { modeles } from '../modeles';
import { caracteristiques } from '../caracteristiques';
import { ModelService } from '../service/model.service';
import { CaracteristiqueService } from '../service/caracteristique.service';
import { articles } from '../articles';




@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.scss']
})
export class AjouterComponent implements OnInit {

    selectedCat:number;
    selectedF:number;
    selectedM:number;
    selectedCaract:number;


    sf:sous_familles[]=[];
    famille:familles[]=[];
    familles:familles;
    categorie:categories[]=[];

    mod:modeles[]=[];
    caract:caracteristiques[]=[];

image:string=null;

  form!:FormGroup;
  article:articles;
  id!:number;

src:string;
img:string;

  constructor(public articleService:ArticleService ,
     private router:Router,
     private modService:ModelService,
     private caractService:CaracteristiqueService,

     ) { }

  ngOnInit(): void {

    this.articleService.getSF().subscribe((data: sous_familles[])=>{
      this.sf = data;
      console.log(this.sf);
    })

    this.articleService.getAll().subscribe((data:articles)=>{
      this.article = data;


    });


    this.articleService.getCateg().subscribe((data: categories[])=>{
      this.categorie = data;
      console.log(this.categorie);
    })

    this.articleService.getF().subscribe((data: familles[])=>{
      this.famille = data;
      console.log(this.famille);
    })
    this.modService.getAll().subscribe((data: modeles[])=>{
      this.mod = data;
      console.log(this.mod);
    })
    this.caractService.getAll().subscribe((data: caracteristiques[])=>{
      this.caract = data;
      console.log(this.caract);
    })


    this.form = new FormGroup({
      desgnArt: new FormControl('', [Validators.required]),
      prix: new FormControl('', Validators.required),
      ancienPrix: new FormControl('', Validators.required),
      etat: new FormControl('', Validators.required),
      dureeGarantie: new FormControl('', Validators.required),
      refInternational: new FormControl('', Validators.required),
      livraison: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),

      id_cat: new FormControl(this.categorie[0] ),
      id_F: new FormControl(this.famille[0]),
      id_SF: new FormControl(this.sf[0], [Validators.required]),

      id_mod: new FormControl(this.mod[0] ),
      id_caract: new FormControl(this.caract[0] ),

    });


  }

  get f(){
    return this.form.controls;
  }


  submit(){
    console.log(this.form.value)
    this.articleService.create(this.form.value).subscribe((res:any) => {
      console.log('Article created successfully!');
         this.router.navigateByUrl('/liste');

  })


}


}
