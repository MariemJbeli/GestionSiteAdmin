import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articles } from '../articles';
import { commandes } from '../commande';
import { ligne_commandes } from '../ligne_commande';
import { ArticleService } from '../service/article.service';
import { CommandeService } from '../service/commande.service';
import { LigneCommandeService } from '../service/ligne-commande.service';

@Component({
  selector: 'app-detaill-commande',
  templateUrl: './detaill-commande.component.html',
  styleUrls: ['./detaill-commande.component.Scss']
})
export class DetaillCommandeComponent implements OnInit {
  com:commandes[]=[];
  commande:commandes;
  article:articles[]=[];
  art:articles;
  lcommande:ligne_commandes[]=[];
  lcom:ligne_commandes;
  id: number;
  artId:number;
  artNom:string;

  lignecom:ligne_commandes;
  articleId:number;
  nom_article:string;




  constructor(private route:ActivatedRoute,
    private commandeService:CommandeService,
    private lcommandeService:LigneCommandeService,
    private artService:ArticleService) { }

  ngOnInit(): void {
    this.commandeService.getAll().subscribe((data: commandes[])=>{
      this.com = data;
      console.log(this.com);
    });
    this.commandeService.getAll().subscribe((data: commandes)=>{
      this.commande = data;
      console.log(this.commande);
    });
    this.lcommandeService.getAll().subscribe((data: ligne_commandes)=>{
      this.lignecom = data;
      console.log(this.commande);
    });



    this.lcommandeService.getAll().subscribe((data: ligne_commandes[])=>{
      this.lcommande = data;
      console.log(this.lcommande);
    });

    this.artService.getAll().subscribe((data: articles[])=>{
      this.article = data;
      console.log(this.article);
    });
    this.id = this.route.snapshot.params['lcommandeId'];

      this.lcommandeService.find(this.id).subscribe((data:ligne_commandes)=>{
        this.lcom=data;
        this.artId=this.lcom.id_art
        console.log("id",this.artId)
      });

      setTimeout(() => {
        this.artService.find(this.articleId).subscribe((result)=>{
        this.article=result
        console.log("a",result);

        this.nom_article=this.art.desgnArt
        })
        console.log("nom",this.nom_article);
        }, 1000);
  }

}
