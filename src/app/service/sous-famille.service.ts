import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { sous_familles } from '../sous_familles';
import { familles } from '../familles';

@Injectable({
  providedIn: 'root'
})
export class SousFamilleService {
  private apiURL="http://127.0.0.1:8000/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient:HttpClient) { }
  getAll(): Observable<any>{
    return this.httpClient.get(this.apiURL+'/sous_familles')
    .pipe(
      catchError(this.errorHandler))
  }
  listeSF(): Observable<sous_familles[]>  {
    return this.httpClient.get<sous_familles[]>(this.apiURL +'/sous_familles');
  }
  getF(): Observable<any>{
    return this.httpClient.get(this.apiURL+'/familles')
    .pipe(
      catchError(this.errorHandler))
  }

  create(sf:sous_familles):Observable<any>{
    return this.httpClient.post(this.apiURL+'/sous_familles',JSON.stringify(sf), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:number):Observable<any>{
    return this.httpClient.get(this.apiURL + '/sous_familles/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update (id:number , sf:sous_familles):Observable<any>{
    return this.httpClient.put(this.apiURL  + '/sous_familles/' + id, JSON.stringify(sf), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/sous_familles/' + id, this.httpOptions)

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
