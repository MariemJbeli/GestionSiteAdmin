import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from '../service/categorie.service';
import { categories } from '../categories';

@Component({
  selector: 'app-modifier-categ',
  templateUrl: './modifier-categ.component.html',
  styleUrls: ['./modifier-categ.component.scss']
})
export class ModifierCategComponent implements OnInit {
id!: number;
categ!:categories;
form!: FormGroup;
  constructor(public categorieService:CategorieService, private router:Router , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['categId'];

    this.categorieService.find(this.id).subscribe((data:categories)=>{
      this.categ = data;
    });

    this.form= new FormGroup({
      nom_categ: new FormControl('', Validators.required),
  });
  }
  get f(){
    return this.form.controls;
}

submit(){
  console.log(this.form.value);
  this.categorieService.update(this.id,this.form.value).subscribe((res:any) => {
    console.log('categorie à mise a jour!');
    this.router.navigateByUrl('/categorie');
  })
}

}
