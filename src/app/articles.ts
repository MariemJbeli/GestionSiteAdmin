import { sous_familles } from "./sous_familles";


export class articles {

   id!: number;
  desgnArt!: string;
    prix!:number;
    ancienPrix!:number;
    etat!:string;
   dureeGarantie!:string;
  refInternational!:string;
   livraison!:string;
   id_SF!:number;
   image:string;
   SousFamilles!: sous_familles;


}
