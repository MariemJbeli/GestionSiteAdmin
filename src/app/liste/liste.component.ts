import { HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { articles } from '../articles';
import { ArticleService } from '../service/article.service';
import { SousFamilleService } from '../service/sous-famille.service';
import { sous_familles } from '../sous_familles';




const httpOptions={
  Headers:new HttpHeaders({'content-Type':'application/json'})
};



@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit, AfterViewInit {
  version = 'Angular: v' + VERSION.full;
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  article:articles;
  id:number;
  sousFamilleId:number;
  nom_Sous_Famille:string;
  sousfamille:sous_familles;

  searchText: any;

  articles: articles[]=[];
  constructor(public articleService:ArticleService ,
    public route:ActivatedRoute,
      public sousFamilleService:SousFamilleService ) { }


      ngAfterViewInit(): void {

        this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.columns().every(function () {
            const that = this;
            $('input', this.footer()).on('keyup change', function () {
              if (that.search() !== this['value']) {
                that
                  .search(this['value'])
                  .draw();
              }
            });
          });
        });

      }

  ngOnInit(): void {
    this.articleService.getAll().subscribe((data: articles[])=>{
      this.articles = data;

      console.log(this.articles);
    });

    this.id = this.route.snapshot.params['articleId'];

    this.articleService.find(this.id).subscribe((data:articles)=>{
      this.article= data;
      this.sousFamilleId=this.article.id_SF
      console.log("id",this.sousFamilleId);


    });

    setTimeout(() => {
      this.sousFamilleService.find(this.sousFamilleId).subscribe((result)=>{
      this.sousfamille=result;
      console.log("a",result);
      this.nom_Sous_Famille=this.sousfamille.nomSF;
      })
      console.log("nom",this.nom_Sous_Famille);

      }, 1000);



  }
  deleteArticle(id:number){
    this.articleService.delete(id).subscribe(res => {
         this.articles = this.articles.filter(item => item.id !== id);
         console.log('Article deleted successfully!');
    })
  }


}
