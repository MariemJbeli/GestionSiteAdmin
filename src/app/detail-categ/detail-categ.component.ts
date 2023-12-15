import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { categories } from '../categories';
import { CategorieService } from '../service/categorie.service';


@Component({
  selector: 'app-detail-categ',
  templateUrl: './detail-categ.component.html',
  styleUrls: ['./detail-categ.component.scss']
})
export class DetailCategComponent implements OnInit {
  id!:number;
  categ!:categories;
  constructor( public categorieServive:CategorieService , private route:ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['categId'];

    this.categorieServive.find(this.id).subscribe((data:categories)=>{
      this.categ=data;
    });
  }

}
