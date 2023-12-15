import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { sous_familles } from '../sous_familles';
import { SousFamilleService } from '../service/sous-famille.service';


const httpOptions={
  Headers:new HttpHeaders({'content-Type':'application/json'})
};

@Component({
  selector: 'app-sous-famille',
  templateUrl: './sous-famille.component.html',
  styleUrls: ['./sous-famille.component.scss']
})
export class SousFamilleComponent implements OnInit {
  sfamilles:sous_familles[]=[];

  constructor(public sousFamilleService:SousFamilleService) { }

  ngOnInit(): void {
    this.sousFamilleService.getAll().subscribe((data: sous_familles[])=>{
      this.sfamilles = data;
      console.log(this.sfamilles);
    })
  }

  deleteSF(id:number){
    this.sousFamilleService.delete(id).subscribe(res => {
         this.sfamilles = this.sfamilles.filter(item => item.id !== id);
         console.log('sous Famille deleted successfully!');
    })
  }

}
