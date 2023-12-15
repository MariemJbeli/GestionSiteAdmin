import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { commandes } from '../commande';
import { CommandeService } from '../service/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {
  public idValue;
  com:commandes;
  commande:commandes[]=[];
  id:number;
  idclient:string;

  constructor(private route: ActivatedRoute, private router:Router,
    private commandeService:CommandeService) {
      this.route.queryParams.subscribe(params =>{
        this.idclient = params['id'];
      })
    }

  ngOnInit(): void {
    this.idValue = this.route.snapshot.queryParamMap.get('id');

    console.log('this id Value = '+this.idValue);

    this.commandeService.getAll().subscribe((data: commandes[])=>{
      this.commandeService.showcommande(this.idValue).subscribe((data: commandes[])=>{
      this.commande = data;
      console.log(this.commande);
    })
  });

    this.id = this.route.snapshot.params['commandeId'];

    this.commandeService.find(this.id).subscribe((data:commandes)=>{
      this.com = data;
    });


  }

  deleteCommande(id:number){
    this.commandeService.delete(id).subscribe(res => {
         this.commande = this.commande.filter(item => item.id !== id);
         console.log('Commande deleted successfully!');
    })
  }
  submit(){


    this.router.navigate(
      ['/ajouterCommande'],
      { queryParams: { id: this.idValue } }
    );


}
}
