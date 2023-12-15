import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { modeles } from '../modeles';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private apiURL="http://127.0.0.1:8000/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<any>{
    return this.httpClient.get(this.apiURL+'/modeles')
    .pipe(
      catchError(this.errorHandler))
  }

  getCateg(): Observable<any>{
    return this.httpClient.get(this.apiURL+'/categories')
    .pipe(
      catchError(this.errorHandler))
  }

  create(model:modeles):Observable<any>{
    return this.httpClient.post(this.apiURL+'/modeles',JSON.stringify(model), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:number):Observable<any>{
    return this.httpClient.get(this.apiURL + '/modeles/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  showcaracteristique(idmod:number){
    return this.httpClient.get(this.apiURL+'/lignemod/'+ idmod)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update (id:number , model:modeles):Observable<any>{
    return this.httpClient.put(this.apiURL  + '/modeles/' + id, JSON.stringify(model), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/modeles/' + id, this.httpOptions)

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
