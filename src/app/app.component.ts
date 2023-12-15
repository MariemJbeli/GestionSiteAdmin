import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GestionSiteAdmin';
  sideBarOpen=true;

  bar=true;

  ngOnInit(): void {}
  sideBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }

  constructor(router: Router, activatedRoute:ActivatedRoute) {
    console.log("aa");
    console.log(activatedRoute.snapshot.url)
    console.log(window.location.pathname);
    if (window.location.pathname == "/"  ||window.location.pathname == "/login"  ||window.location.pathname == "/vitrine2" || window.location.pathname == "/vitrine" || window.location.pathname =="/ajouterClient" || window.location.pathname =="/connecterClient" || window.location.pathname =="/vitrine2"|| window.location.pathname =="/commande" || window.location.pathname =="/ajouterCommande" ||  window.location.pathname =="/ligneCommande")
      this.bar=false;
    else
      this.bar=true;
  }
}
