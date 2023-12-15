import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { CategorieService } from '../service/categorie.service';

@Component({
  selector: 'app-ajout-categ',
  templateUrl: './ajout-categ.component.html',
  styleUrls: ['./ajout-categ.component.scss']
})
export class AjoutCategComponent implements OnInit {
  form!: FormGroup ;
  constructor(public categorieService:CategorieService , private router:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nom_categ: new FormControl('', [Validators.required]),
  });
  }
  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.categorieService.create(this.form.value).subscribe((res:any) => {
         console.log('categorie created successfully!');
         this.router.navigateByUrl('/categorie');
    })
  }

}
