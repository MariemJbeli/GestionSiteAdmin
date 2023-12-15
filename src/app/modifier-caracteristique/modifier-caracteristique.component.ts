import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { caracteristiques } from '../caracteristiques';
import { CaracteristiqueService } from '../service/caracteristique.service';
@Component({
  selector: 'app-modifier-caracteristique',
  templateUrl: './modifier-caracteristique.component.html',
  styleUrls: ['./modifier-caracteristique.component.scss']
})
export class ModifierCaracteristiqueComponent implements OnInit {
  id!:number;
  caract!:caracteristiques;
  form!:FormGroup
  constructor(public caractService:CaracteristiqueService , private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['caractId'];

    this.caractService.find(this.id).subscribe((data:caracteristiques)=>{
      this.caract = data;
    });

    this.form= new FormGroup({
      desgnCaract: new FormControl('', Validators.required),
      libelle: new FormControl('', Validators.required),
      id_mod: new FormControl('', Validators.required),
    });
  }
  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.caractService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('caract updated successfully!');
         this.router.navigateByUrl('/caracteristique');
    })
  }

}
