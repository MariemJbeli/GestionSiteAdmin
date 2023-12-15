import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../service/categorie.service';

import { categories } from '../categories';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  categ : categories[]=[];

  constructor(public categorieService:CategorieService) { }
  ngOnInit(): void {
    this.categorieService.getAll().subscribe((data: categories[])=>{
      this.categ = data;
      console.log(this.categ);
    })
  }
  deleteCateg(id:number){
    this.categorieService.delete(id).subscribe(res => {
         this.categ = this.categ.filter(item => item.id !== id);
         console.log('Categorie deleted successfully!');
    })
  }



  displayedColumns = ['code', 'order', 'active', 'imageV','imageH1','imageH2','imageC'];
  dataSource = ELEMENT_DATA;
}

export interface Element {

}

const ELEMENT_DATA: Element[] = [

];
