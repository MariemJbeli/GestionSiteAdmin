import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { caracteristiques } from '../caracteristiques';

@Injectable({
  providedIn: 'root'
})
export class CaracteristiqueService {
  private apiURL="http://127.0.0.1:8000/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }

  getM(): Observable<any>{
    return this.httpClient.get(this.apiURL+'/modeles')
    .pipe(
      catchError(this.errorHandler))
  }

  getAll(): Observable<any>{
    return this.httpClient.get(this.apiURL+'/caracteristiques')
    .pipe(
      catchError(this.errorHandler))
  }

  create(caract:caracteristiques):Observable<any>{
    return this.httpClient.post(this.apiURL+'/caracteristiques',JSON.stringify(caract), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:number):Observable<any>{
    return this.httpClient.get(this.apiURL + '/caracteristiques/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update (id:number , caract:caracteristiques):Observable<any>{
    return this.httpClient.put(this.apiURL  + '/caracteristiques/' + id, JSON.stringify(caract), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/caracteristiques/' + id, this.httpOptions)

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
