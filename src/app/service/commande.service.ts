import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


import { articles } from '../articles';
import { ligne_commandes } from '../ligne_commande';
import { commandes } from '../commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private apiURL="http://127.0.0.1:8000/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient:HttpClient) { }
  getArticle(): Observable<any>{
    return this.httpClient.get(this.apiURL+'/article')
    .pipe(
      catchError(this.errorHandler))
  }

  getAll(): Observable<any>{
    return this.httpClient.get(this.apiURL+'/commandes')
    .pipe(
      catchError(this.errorHandler))
  }

  showcommande(idclient:number){
    return this.httpClient.get(this.apiURL+'/com/'+ idclient)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  showcaracteristique(idcom:number){
    return this.httpClient.get(this.apiURL+'/lignec/'+ idcom)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(commande:commandes):Observable<any>{
    return this.httpClient.post(this.apiURL+'/commandes',JSON.stringify(commande), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:number):Observable<any>{
    return this.httpClient.get(this.apiURL + '/commandes/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  findLigneC(id:number):Observable<any>{
    return this.httpClient.get(this.apiURL + '/ligne_commandes/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }



  update (id:number , commande:commandes):Observable<any>{
    return this.httpClient.put(this.apiURL  + '/commandes/' + id, JSON.stringify(commande), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/commandes/' + id, this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

}
