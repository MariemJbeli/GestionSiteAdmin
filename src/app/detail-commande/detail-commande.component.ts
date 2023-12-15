import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articles } from '../articles';
import { clients } from '../client';
import { commandes } from '../commande';
import { ligne_commandes } from '../ligne_commande';
import { ArticleService } from '../service/article.service';
import { ClientService } from '../service/client.service';
import { CommandeService } from '../service/commande.service';
import { LigneCommandeService } from '../service/ligne-commande.service';

@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.component.html',
  styleUrls: ['./detail-commande.component.scss']
})
export class DetailCommandeComponent implements OnInit {
  com:commandes[]=[];
  clientId:number;
  client:clients[]=[];
  ligne:ligne_commandes[]=[];
  nom_client:string;
  ad:string;
  id:number;
  commande:commandes;
  cl:clients;

lcomId:number;
lc:ligne_commandes;
nom_lc:string;
  lcomIdA: number;
  lcomIdC: number;
idart:number;
article:articles;
nom_art:string;


lignec:ligne_commandes[]=[];

  constructor( private commandeService:CommandeService,

    private clientService:ClientService,
    private route:ActivatedRoute,private artService:ArticleService) { }

    ngOnInit(): void {
      this.commandeService.getAll().subscribe((data: commandes[])=>{
        this.com = data;
        console.log(this.com);
      });

      this.clientService.getAll().subscribe((data: clients[])=>{
        this.client = data;
        console.log(this.client);
      });


      this.id = this.route.snapshot.params['commandeId'];

      this.commandeService.find(this.id).subscribe((data:commandes)=>{
        this.commande=data;
        this.clientId=this.commande.id_client;
        console.log("commande = ",this.commande);
        console.log("id",this.clientId);


        this.clientService.find(this.clientId).subscribe((result:clients)=>{
          this.cl=result
          console.log("Cl =",result);
          this.nom_client=this.cl.nomPrenom;
          this.ad=this.cl.adress;
        })
      });


      this.commandeService.showcaracteristique(this.id).subscribe((data:ligne_commandes[])=>{
        this.lignec= data;
        console.log("caract",this.lignec);

        this.commandeService.findLigneC(this.lignec[0].id_art).subscribe((data:ligne_commandes)=>{
          this.lc=data;
          this.idart=this.lc.id_art;
          console.log("id",this.idart);

        });

        this.artService.find(this.lignec[0].id_art).subscribe((result)=>{
          this.article=result
          //console.log("a",result);

          this.nom_art=this.article.desgnArt;
          //console.log("nom",this.nom_art);
        })


      })


      this.commandeService.findLigneC(this.idart).subscribe((data:ligne_commandes)=>{
        this.lc=data;
        this.idart=this.lc.id_art;
        console.log("id",this.idart);

      });

      console.log("idart = ",this.lignec);

  

      }
    }
