import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ligne_commandes } from '../ligne_commande';

@Injectable({
  providedIn: 'root'
})
export class LigneCommandeService {
  private apiURL="http://127.0.0.1:8000/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient:HttpClient) { }
  getAll(): Observable<any>{
    return this.httpClient.get(this.apiURL+'/ligne_commandes')
    .pipe(
      catchError(this.errorHandler))
  }

  create(lcom:ligne_commandes):Observable<any>{
    return this.httpClient.post(this.apiURL+'/ligne_commandes',JSON.stringify(lcom), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  showlignecom(idcom:number){
    return this.httpClient.get(this.apiURL+'/lignecmd/'+ idcom)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  showligneart(idart:number){
    return this.httpClient.get(this.apiURL+'/ligneart/'+ idart)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:number):Observable<any>{
    return this.httpClient.get(this.apiURL + '/ligne_commandes/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update (id:number , article:ligne_commandes):Observable<any>{
    return this.httpClient.put(this.apiURL  + '/ligne_commandes/' + id, JSON.stringify(article), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/ligne_commandes/' + id, this.httpOptions)

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
