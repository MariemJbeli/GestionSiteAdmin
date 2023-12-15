import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleComponent } from './article/article.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CaracteristiqueComponent } from './caracteristique/caracteristique.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ListeComponent } from './liste/liste.component';
import { GestionCommandeComponent } from './gestion-commande/gestion-commande.component';

import { ModifierComponent } from './modifier/modifier.component';
import { DetailComponent } from './detail/detail.component';
import { ModifierCategComponent } from './modifier-categ/modifier-categ.component';
import { DetailCategComponent } from './detail-categ/detail-categ.component';
import { AjoutCategComponent } from './ajout-categ/ajout-categ.component';
import { AjoutFamilleComponent } from './ajout-famille/ajout-famille.component';
import { ModifierFamilleComponent } from './modifier-famille/modifier-famille.component';
import { DetailFamilleComponent } from './detail-famille/detail-famille.component';
import { FamilleComponent } from './famille/famille.component';
import { ModelComponent } from './model/model.component';
import { AjoutModelComponent } from './ajout-model/ajout-model.component';
import { ModifierModelComponent } from './modifier-model/modifier-model.component';
import { DetailModelComponent } from './detail-model/detail-model.component';
import { SousFamilleComponent } from './sous-famille/sous-famille.component';
import { AjoutSFComponent } from './ajout-sf/ajout-sf.component';
import { ModifierSFComponent } from './modifier-sf/modifier-sf.component';
import { DetailSFComponent } from './detail-sf/detail-sf.component';
import { AjoutCaracteristiqueComponent } from './ajout-caracteristique/ajout-caracteristique.component';
import { ModifierCaracteristiqueComponent } from './modifier-caracteristique/modifier-caracteristique.component';
import { DetailCaracteristiqueComponent } from './detail-caracteristique/detail-caracteristique.component';
import { LoginClientComponent } from './component/login-client/login-client.component';
import { VitrineComponent } from './vitrine/vitrine.component';

import { AjoutCommandeComponent } from './ajout-commande/ajout-commande.component';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';
import { ClientComponent } from './client/client.component';
import { CommandeComponent } from './commande/commande.component';
import { LigneCommandeComponent } from './ligne-commande/ligne-commande.component';
import { DetailCommandeComponent } from './detail-commande/detail-commande.component';
import { ConnecterClientComponent } from './connecter-client/connecter-client.component';
import { Vitrine2Component } from './vitrine2/vitrine2.component';
import { DetaillCommandeComponent } from './detaill-commande/detaill-commande.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},

  {path: 'dashboard', component:DashboardComponent},
  {path: 'login', component:LoginComponent},
  {path: 'loginClient', component:LoginClientComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'vitrine', component:VitrineComponent},
  {path: 'vitrine2', component:Vitrine2Component},
  {path: 'article', component:ArticleComponent},
  {path: 'categorie', component:CategorieComponent},

  {path: 'commande', component:CommandeComponent},
  {path:  'commande/:commandeId/ligneCommande', component: LigneCommandeComponent},
  {path: 'commande/:commandeId/ligneCommande/:commandeId/ligneCommande', component:LigneCommandeComponent},
  {path: 'ajouterCommande', component:AjoutCommandeComponent},
  {path: 'ajouterClient', component:AjoutClientComponent},
  {path: 'client', component:ClientComponent},



  {path: 'connecterClient', component:ConnecterClientComponent},
  {path: 'connecterClient/:id', component:ConnecterClientComponent},


  {path: 'caracteristique', component:CaracteristiqueComponent},
  {path: 'ajoutCaract',component: AjoutCaracteristiqueComponent},
  {path: 'caracteristique/:caractId/modifierCaract', component: ModifierCaracteristiqueComponent},
  {path: 'caracteristique/:caractId/detailCaract',component: DetailCaracteristiqueComponent},


  {path: 'ajouter',component:AjouterComponent},

  {path:  'liste/:articleId/modifier', component: ModifierComponent},
  {path: 'liste',component:ListeComponent},

  {path: 'gestion-commande',component: GestionCommandeComponent},
  {path: 'gestion-commande/:commandeId/detailCommande',component: DetailCommandeComponent},
  {path: 'gestion-commande/:commandeId/detailCommande/:commandeId/detaillCommande',component: DetaillCommandeComponent},
  {path: 'gestion-commande/:commandeId/detailCommande/:commandeId/detaillCommande/:lcommandeId/detailCommande',component: DetaillCommandeComponent},


  {path:  'liste/:articleId/modifier', component: ModifierComponent},
  {path: 'liste/:articleId/detail',component: DetailComponent},
  {path: 'vitrine/:articleId/detail',component: DetailComponent},
  {path: 'vitrine2/:articleId/detail',component: DetailComponent},

  {path:  'categorie/:categId/modifierCateg', component: ModifierCategComponent},
  {path: 'categorie/:categId/detailCateg',component: DetailCategComponent},

  {path: 'ajoutCateg',component: AjoutCategComponent},

  {path: 'famille', component: FamilleComponent},
  {path: 'ajoutFamille',component: AjoutFamilleComponent},
  {path:  'famille/:familleId/modifierFamille', component: ModifierFamilleComponent},
  {path: 'famille/:familleId/detailFamille',component: DetailFamilleComponent},

  {path: 'model', component: ModelComponent},
  {path: 'ajoutModel',component: AjoutModelComponent},
  {path:  'model/:modelId/modifierModel', component: ModifierModelComponent},
  {path: 'model/:modelId/detailModel',component: DetailModelComponent},

  {path: 'sous-famille', component: SousFamilleComponent},
  {path: 'ajoutSF',component: AjoutSFComponent},
  {path:  'sous-famille/:sfId/modifierSF', component: ModifierSFComponent},
  {path: 'sous-famille/:sfId/detailSF',component: DetailSFComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
