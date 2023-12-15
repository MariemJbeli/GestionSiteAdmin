import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { clients } from '../client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  client:clients;
  clientt:clients[]=[];
  id:number;
  constructor(private route: ActivatedRoute,
    private clientService:ClientService) { }

  ngOnInit(): void {


     this.clientService.getAll().subscribe((data: clients[])=>{

      this.clientt = data;
      console.log(this.clientt);
   
  });

    this.id = this.route.snapshot.params['clientId'];

    this.clientService.find(this.id).subscribe((data:clients)=>{
      this.client = data;
    });
  }
  deleteClient(id:number){
    this.clientService.delete(id).subscribe(res => {
         this.clientt = this.clientt.filter(item => item.id !== id);
         console.log('Commande deleted successfully!');
    })
  }

}
