import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { clients } from '../client';
import { connecte_clients } from '../connecter';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiURL="http://127.0.0.1:8000/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<any>{
    return this.httpClient.get(this.apiURL+'/clients')
    .pipe(
      catchError(this.errorHandler))
  }

  showclient(idclient:number){
    return this.httpClient.get(this.apiURL+'/cl/'+ idclient)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(client:clients):Observable<any>{
    return this.httpClient.post(this.apiURL+'/clients',JSON.stringify(client), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  find(id:number):Observable<any>{
    return this.httpClient.get(this.apiURL + '/clients/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update (id:number , client:clients):Observable<any>{
    return this.httpClient.put(this.apiURL  + '/clients/' + id, JSON.stringify(client), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/clients/' + id, this.httpOptions)

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
