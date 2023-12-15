import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { familles } from '../familles';
import { sous_familles } from '../sous_familles';

@Injectable({
  providedIn: 'root'
})
export class FamilleService {
  private apiURL="http://127.0.0.1:8000/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<any>{
    return this.httpClient.get(this.apiURL+'/familles')
    .pipe(
      catchError(this.errorHandler))
  }



  getCateg(): Observable<any>{
    return this.httpClient.get(this.apiURL+'/categories')
    .pipe(
      catchError(this.errorHandler))
  }

  create(famille:familles):Observable<any>{
    return this.httpClient.post(this.apiURL+'/familles',JSON.stringify(famille), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:number):Observable<any>{
    return this.httpClient.get(this.apiURL + '/familles/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update (id:number , famille:familles):Observable<any>{
    return this.httpClient.put(this.apiURL  + '/familles/' + id, JSON.stringify(famille), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/familles/' + id, this.httpOptions)

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
