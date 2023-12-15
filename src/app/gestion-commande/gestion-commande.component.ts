import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { clients } from '../client';
import { commandes } from '../commande';
import { ligne_commandes } from '../ligne_commande';
import { ClientService } from '../service/client.service';
import { CommandeService } from '../service/commande.service';

@Component({
  selector: 'app-gestion-commande',
  templateUrl: './gestion-commande.component.html',
  styleUrls: ['./gestion-commande.component.scss']
})
export class GestionCommandeComponent implements OnInit {
  com:commandes[]=[];
  clientId:number;
  client:clients[]=[];

  id:number;
  commande:commandes;
  cl:clients;
  lignec:ligne_commandes;

  constructor(public comService:CommandeService  ,
    private route:ActivatedRoute,
    private clientService:ClientService ) { }
  ngOnInit(): void {
    this.comService.getAll().subscribe((data: commandes[])=>{
      this.com = data;
      console.log(this.com);
    });

    console.log(this.commande );
    this.id = this.route.snapshot.params['commandeId'];

    this.comService.find(this.id).subscribe((data:commandes)=>{
      this.commande=data;
      this.clientId=this.commande.id_client
      console.log("id",this.clientId)

    });


    this.clientService.getAll().subscribe((data: clients[])=>{
      this.client = data;
      console.log(this.client);
    });

    
  }
  deleteCom(id:number){
    this.comService.delete(id).subscribe(res => {
         this.com = this.com.filter(item => item.id !== id);
         console.log('commande deleted successfully!');
    })
  }


}
