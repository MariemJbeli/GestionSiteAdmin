import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { clients } from '../client';
import { connecte_clients } from '../connecter';
import { ClientService } from '../service/client.service';


@Component({
  selector: 'app-connecter-client',
  templateUrl: './connecter-client.component.html',
  styleUrls: ['./connecter-client.component.scss']
})
export class ConnecterClientComponent implements OnInit {
  public idValue;
  client:clients[]=[];
  form!:FormGroup;
  id:number;
  cl:clients;
  cll:clients;
  clientId:number;
  pass:string;
  email:string;
  idclient:string;
  connecte:connecte_clients;
  constructor(private router:Router,
    private route:ActivatedRoute,
    private clientService:ClientService) {
      this.route.queryParams.subscribe(params =>{
        this.idclient = params['id'];
      
      })
     }

  ngOnInit(): void {

    this.idValue = this.route.snapshot.queryParamMap.get('id');

    console.log('this id Value = '+this.idValue);

    this.clientService.getAll().subscribe((data: clients)=>{
      this.cl = data;
      console.log(this.cl);
    })
    this.clientService.getAll().subscribe((data: clients[])=>{
      this.client = data;
      console.log(this.client);
    })


    this.id = this.route.snapshot.params['clientId'];

    this.clientService.find(this.id).subscribe((data:clients)=>{
      this.cll= data;
      this.clientId=this.cll.id
      console.log("id",this.clientId);

      });

    setTimeout(() => {
      this.clientService.find(this.clientId).subscribe((result)=>{
      this.cl=result
      console.log("a",result);

      this.email=this.cl.email
      this.pass=this.cl.motPass
      })
      console.log("email",this.email);
      console.log("email",this.pass);
    });

    this.idclient = this.route.snapshot.paramMap.get('id');

    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      motPass: new FormControl('', Validators.required),
    });
  }
  get f(){
    return this.form.controls;
  }
  res:any;
  submit(){
    console.log(this.form.value);


        this.router.navigate(
          ['/vitrine2'],
          { queryParams: { id: this.idValue } }
        );


  }
  }


