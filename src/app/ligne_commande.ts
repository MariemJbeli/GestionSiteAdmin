import { articles } from "./articles";
import { commandes } from "./commande";

export class ligne_commandes {
  id: number;
  id_art:number;
  id_com:number;
  quantite:number;
  article:articles[];
  commande:commandes[];
}
