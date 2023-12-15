import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { articles } from '../articles';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
articles:articles[]=[];
  constructor(private http: HttpClient,
    public articleService:ArticleService ) { }

  ngOnInit(): void {

    this.articleService.getAll().subscribe((data: articles[])=>{
      this.articles = data;
      console.log(this.articles);
    });
  }



}





