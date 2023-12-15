import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { familles } from '../familles';
import { FamilleService } from '../service/famille.service';


const httpOptions={
  Headers:new HttpHeaders({'content-Type':'application/json'})
};

@Component({
  selector: 'app-famille',
  templateUrl: './famille.component.html',
  styleUrls: ['./famille.component.scss']
})
export class FamilleComponent implements OnInit {
  familles:familles[]=[];
  constructor(public familleService:FamilleService) { }

  ngOnInit(): void {
    this.familleService.getAll().subscribe((data: familles[])=>{
      this.familles = data;
      console.log(this.familles);
    })
  }

  deleteFamille(id:number){
    this.familleService.delete(id).subscribe(res => {
         this.familles = this.familles.filter(item => item.id !== id);
         console.log('Famille deleted successfully!');
    })
  }

}
