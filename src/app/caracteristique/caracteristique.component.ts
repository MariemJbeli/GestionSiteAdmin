import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { caracteristiques } from '../caracteristiques';
import { CaracteristiqueService } from '../service/caracteristique.service';

const httpOptions={
  Headers:new HttpHeaders({'content-Type':'application/json'})
};

@Component({
  selector: 'app-caracteristique',
  templateUrl: './caracteristique.component.html',
  styleUrls: ['./caracteristique.component.scss']
})
export class CaracteristiqueComponent implements OnInit {

  caracts: caracteristiques[]=[];

  constructor(public caractService:CaracteristiqueService) { }

  ngOnInit(): void {
    this.caractService.getAll().subscribe((data: caracteristiques[])=>{
      this.caracts = data;
      console.log(this.caracts);
    })
  }
  deleteCaract(id:number){
    this.caractService.delete(id).subscribe(res => {
         this.caracts = this.caracts.filter(item => item.id !== id);
         console.log('caract deleted successfully!');
    })
  }



}

