import { Component, OnInit } from '@angular/core';
import { articles } from '../articles';
import { ArticleService } from '../service/article.service';
import { SousFamilleService } from '../service/sous-famille.service';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.scss']
})
export class VitrineComponent implements OnInit {
  searchText: any;

  articles: articles[]=[];
  constructor(public articleService:ArticleService ,  public sousFamilleService:SousFamilleService ) { }
  ngOnInit(): void {
    this.articleService.getAll().subscribe((data: articles[])=>{
      this.articles = data;
      console.log(this.articles);
     
    });


  }

}
