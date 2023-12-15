import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { modeles } from '../modeles';
import { ModelService } from '../service/model.service';


const httpOptions={
  Headers:new HttpHeaders({'content-Type':'application/json'})
};
@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.Scss']
})
export class ModelComponent implements OnInit {
  models:modeles[]=[];
  constructor( public modelService:ModelService) { }

  ngOnInit(): void {
    this.modelService.getAll().subscribe((data: modeles[])=>{
      this.models = data;
      console.log(this.models);
    })
  }
  deleteModel(id:number){
    this.modelService.delete(id).subscribe(res => {
         this.models = this.models.filter(item => item.id !== id);
         console.log('Model deleted successfully!');
    })
  }

}
