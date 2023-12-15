import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { articles } from '../articles';
import { ArticleService } from '../service/article.service';
import { SousFamilleService } from '../service/sous-famille.service';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine2.component.html',
  styleUrls: ['./vitrine2.component.scss']
})
export class Vitrine2Component implements OnInit {
  searchText: any;
  public idValue;
  articles: articles[]=[];
  idclient:string;
  constructor(public articleService:ArticleService ,private route:ActivatedRoute, private router:Router,
      public sousFamilleService:SousFamilleService ) {
        this.route.queryParams.subscribe(params =>{
          this.idclient = params['id'];
        })
      }
  ngOnInit(): void {
    this.idValue = this.route.snapshot.queryParamMap.get('id');

    console.log('this id Value = '+this.idValue);

    this.articleService.getAll().subscribe((data: articles[])=>{
      this.articles = data;
      console.log(this.articles);
    });
    this.idclient = this.route.snapshot.paramMap.get('id');


  }

  submit(){
        this.router.navigate(
          ['/commande'],
          { queryParams: { id: this.idValue } }
        );


  }

}
