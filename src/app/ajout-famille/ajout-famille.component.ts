import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { FamilleService } from '../service/famille.service';
import { categories} from '../categories';
import { familles } from '../familles';

@Component({
  selector: 'app-ajout-famille',
  templateUrl: './ajout-famille.component.html',
  styleUrls: ['./ajout-famille.component.scss']
})
export class AjoutFamilleComponent implements OnInit {
  form!: FormGroup ;
  categ: categories[]=[];


  constructor(public familleService:FamilleService , private router:Router) { }

  ngOnInit(): void {
    this.familleService.getCateg().subscribe((data: categories[])=>{
      this.categ = data;
      console.log(this.categ);
    })

    this.form = new FormGroup({
      nomF: new FormControl('', [Validators.required]),
      id_cat: new FormControl(this.categ[0])
  });
  }
  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.familleService.create(this.form.value).subscribe((res:any) => {
         console.log('famille created successfully!');
         this.router.navigateByUrl('/famille');
    })
  }



}
