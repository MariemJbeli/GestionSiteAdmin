import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { articles } from '../articles';
import { clients } from '../client';
import { commandes } from '../commande';
import { ligne_commandes } from '../ligne_commande';
import { ArticleService } from '../service/article.service';
import { ClientService } from '../service/client.service';
import { CommandeService } from '../service/commande.service';
import { LigneCommandeService } from '../service/ligne-commande.service';

@Component({
  selector: 'app-ligne-commande',
  templateUrl: './ligne-commande.component.html',
  styleUrls: ['./ligne-commande.component.scss']
})
export class LigneCommandeComponent implements OnInit {
  form!:FormGroup;
  id_com:number;
  id_art:number;
  comande:commandes;
  a:articles;
  id:number;
  lcom:ligne_commandes;
  article:articles[]=[];
  commande:commandes[]=[];
  lcommande:ligne_commandes[]=[];
  idclient:string;
  cll:clients;
  client:clients[]=[];

  clientId:number;
  public idValue;
  constructor(private route: ActivatedRoute,
    private articleService:ArticleService,
    private commandeService:CommandeService,
    private router:Router,
    private lcomService:LigneCommandeService,
    private clientService:ClientService) {

     }

  ngOnInit(): void {

    this.idValue = this.route.snapshot.queryParamMap.get('id');

    console.log('this id Value = '+this.idValue);

    this.articleService.getAll().subscribe((data: articles[])=>{
      this.article = data;
      console.log(this.article);
    })


    this.commandeService.getAll().subscribe((data: commandes[])=>{
      this.commande = data;
      console.log(this.commande);
    })
     this.lcomService.getAll().subscribe((data: ligne_commandes[])=>{
      this.lcomService.showlignecom(this.id_com).subscribe((data: ligne_commandes[])=>{
        this.lcommande = data;
        console.log(this.lcommande)
      })
    })


    this.id_com = this.route.snapshot.params['commandeId'];

    this.commandeService.find(this.id_com).subscribe((data:commandes)=>{
      this.comande = data;
      console.log(this.comande);

    });

    this.id = this.route.snapshot.params['lcommandeId'];

    this.lcomService.find(this.id).subscribe((data:ligne_commandes)=>{
      this.lcom = data;
      console.log(this.id);

    });

    this.id_art = this.route.snapshot.params['articleId'];

    this.articleService.find(this.id_art).subscribe((data:articles)=>{
      this.a = data;
      console.log(this.a);

    });



    this.form = new FormGroup({
      id_art: new FormControl('', [Validators.required]),
      id_com: new FormControl('', commandes[0] ),
      quantite: new FormControl('', [Validators.required]),
    });

    this.idclient = this.route.snapshot.paramMap.get('id');

  }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.lcomService.create(this.form.value).subscribe((res:any) => {
      console.log('ligne commande created successfully!');

   })
  }

  

  deleteArticle(id:number){
    this.lcomService.delete(id).subscribe(res => {
         this.lcommande = this.lcommande.filter(item => item.id !== id);
         console.log('Article deleted successfully!');
         this.router.navigateByUrl('/ligneCommande');
    })
  }
}

