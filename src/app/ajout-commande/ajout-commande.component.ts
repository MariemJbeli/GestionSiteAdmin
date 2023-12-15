import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {  FormBuilder, FormGroup, FormControl, Validators, FormArray  } from '@angular/forms';
import { ArticleService } from '../service/article.service';

import { articles } from '../articles';
import { CommandeService } from '../service/commande.service';
import { commandes } from '../commande';
import { clients } from '../client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-ajout-commande',
  templateUrl: './ajout-commande.component.html',
  styleUrls: ['./ajout-commande.component.scss']
})
export class AjoutCommandeComponent implements OnInit {
  d:Date;
  form:FormGroup;
  art:articles[]=[];
  searchText: any;

  commande:commandes[]=[];

  client:clients[]=[];
  cl:clients;
  com:commandes;
  id:number;
  idclient:string;
  public idValue;
  constructor(public articleService:ArticleService ,
    private formBuilder: FormBuilder,
    private router:Router,
    private commandeService:CommandeService,
    private route: ActivatedRoute,
    private clientService:ClientService
    ) { this.route.queryParams.subscribe(params =>{
      this.idclient = params['id'];
    }) }
    selectedCat:number;


  ngOnInit(): void {

    this.idValue = this.route.snapshot.queryParamMap.get('id');

    console.log('this id Value = '+this.idValue);


    this.id = this.route.snapshot.params['clientId'];

    this.clientService.find(this.id).subscribe((data:clients)=>{
      this.cl = data;
    });

    this.d = new Date();
    this.commandeService.getAll().subscribe((data: commandes[])=>{
      this.commande = data;
      console.log(this.commande);
    })

    this.clientService.getAll().subscribe((data: clients[])=>{
      this.client = data;
      console.log(this.client);
    })
    this.idclient = this.route.snapshot.paramMap.get('id');

    this.form = new FormGroup({
      date: new FormControl('', Validators.required),
      id_client: new FormControl('', Validators.required),

    });
    this.cl.id= this.idValue;
  }
  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.commandeService.create(this.form.value).subscribe((res:any) => {
      console.log('commande created successfully!');
      this.router.navigate(['/commande'], { queryParams: { id: this.idValue } });
   })

  }


}

