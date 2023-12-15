import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { clients } from '../client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.scss']
})
export class AjoutClientComponent implements OnInit {
  client:clients[]=[];
  form!:FormGroup;
  id:number;
  cl:clients;
  clientId:number;
  pr: any;
  idclient : string;
  constructor( private router:Router, private route:ActivatedRoute,
    private clientService:ClientService) {
        this.route.queryParams.subscribe(params =>{
          this.idclient = params['id'];
        })
    }

  ngOnInit(): void {
    this.clientService.getAll().subscribe((data: clients[])=>{
      this.client = data;
      console.log(this.client);
    })

    this.id = this.route.snapshot.params['clientId'];

    this.clientService.find(this.id).subscribe((data:clients)=>{
      this.cl = data;


    });
    this.idclient = this.route.snapshot.paramMap.get('id');


    this.form = new FormGroup({
      nomPrenom: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.required),
      adress: new FormControl('', Validators.required),
      motPass: new FormControl('', Validators.required),
    });

}
get f(){
  return this.form.controls;
}
submit(){
  console.log(this.form.value);
  this.clientService.create(this.form.value).subscribe((res:any) => {
    console.log('client created successfully!');
    this.router.navigate(['/connecterClient'], { queryParams: { id: res } });
})


}
}
