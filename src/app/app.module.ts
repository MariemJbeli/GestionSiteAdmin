import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { DataTablesModule } from "angular-datatables";

import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { ArticleComponent } from './article/article.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CaracteristiqueComponent } from './caracteristique/caracteristique.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ListeComponent } from './liste/liste.component';

import { FormsModule } from '@angular/forms';

import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';

import { GestionCommandeComponent } from './gestion-commande/gestion-commande.component';
import {MatTableModule} from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { ModifierComponent } from './modifier/modifier.component';
import { DetailComponent } from './detail/detail.component';
import { DetailCategComponent } from './detail-categ/detail-categ.component';
import { ModifierCategComponent } from './modifier-categ/modifier-categ.component';
import { AjoutCategComponent } from './ajout-categ/ajout-categ.component';
import { FamilleComponent } from './famille/famille.component';
import { DetailFamilleComponent } from './detail-famille/detail-famille.component';
import { ModifierFamilleComponent } from './modifier-famille/modifier-famille.component';
import { AjoutFamilleComponent } from './ajout-famille/ajout-famille.component';
import { ModelComponent } from './model/model.component';
import { AjoutModelComponent } from './ajout-model/ajout-model.component';
import { ModifierModelComponent } from './modifier-model/modifier-model.component';
import { DetailModelComponent } from './detail-model/detail-model.component';
import { DetailSFComponent } from './detail-sf/detail-sf.component';
import { ModifierSFComponent } from './modifier-sf/modifier-sf.component';
import { AjoutSFComponent } from './ajout-sf/ajout-sf.component';
import { SousFamilleComponent } from './sous-famille/sous-famille.component';
import { AjoutCaracteristiqueComponent } from './ajout-caracteristique/ajout-caracteristique.component';

import { ModifierCaracteristiqueComponent } from './modifier-caracteristique/modifier-caracteristique.component';
import { DetailCaracteristiqueComponent } from './detail-caracteristique/detail-caracteristique.component';
import { LoginClientComponent } from './component/login-client/login-client.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { BrowserModule } from "@angular/platform-browser";
import { AjoutCommandeComponent } from './ajout-commande/ajout-commande.component';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';
import { ClientComponent } from './client/client.component';
import { CommandeComponent } from './commande/commande.component';
import { LigneCommandeComponent } from './ligne-commande/ligne-commande.component';
import { DetailCommandeComponent } from './detail-commande/detail-commande.component';
import { ConnecterClientComponent } from './connecter-client/connecter-client.component';
import { Vitrine2Component } from './vitrine2/vitrine2.component';
import { DetaillCommandeComponent } from './detaill-commande/detaill-commande.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,

    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    ArticleComponent,
    CategorieComponent,
    CaracteristiqueComponent,
    AjouterComponent,
    ListeComponent,
    GestionCommandeComponent,
    ModifierComponent,
    DetailComponent,
    DetailCategComponent,
    ModifierCategComponent,
    AjoutCategComponent,
    FamilleComponent,
    DetailFamilleComponent,
    ModifierFamilleComponent,
    AjoutFamilleComponent,
    ModelComponent,
    AjoutModelComponent,
    ModifierModelComponent,
    DetailModelComponent,
    DetailSFComponent,
    ModifierSFComponent,
    AjoutSFComponent,
    SousFamilleComponent,
    AjoutCaracteristiqueComponent,

    ModifierCaracteristiqueComponent,
    DetailCaracteristiqueComponent,
    LoginClientComponent,
    VitrineComponent,

    AjoutCommandeComponent,
    AjoutClientComponent,
    ClientComponent,
    CommandeComponent,
    LigneCommandeComponent,
    DetailCommandeComponent,
    ConnecterClientComponent,
    Vitrine2Component,
    DetaillCommandeComponent,


  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    Ng2SearchPipeModule,
    CdkTableModule,
    MatTableModule,
    HttpClientModule,
    AngularEditorModule,
    MatCardModule ,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    FormsModule,ReactiveFormsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //* MATERIAL IMPORTS
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    AppRoutingModule
  ],
  exports: [RouterModule],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
