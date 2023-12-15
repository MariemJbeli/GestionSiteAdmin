import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { articles } from '../articles';
import { categories } from '../categories';
import { familles } from '../familles';
import { art_caracts } from '../art_caracts';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  private apiURL="http://127.0.0.1:8000/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  categ:categories[];
  famille:familles[];

  constructor(private httpClient:HttpClient) { }

  getSF(): Observable<any>{
    return this.httpClient.get(this.apiURL+'/sous_familles')
    .pipe(
      catchError(this.errorHandler))
  }

  getCateg(): Observable<any>{
    return this.httpClient.get(this.apiURL+'/categories')
    .pipe(
      catchError(this.errorHandler))
  }

  getBase64(file): Observable<string> {
    return new Observable<string>(sub => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        sub.next(reader.result.toString());
        sub.complete();
      };
      reader.onerror = error => {
        sub.error(error);
      };
    })
  }

  getF(): Observable<any>{
    return this.httpClient.get(this.apiURL+'/familles')
    .pipe(
      catchError(this.errorHandler))
  }

  getcaractByArt(value): Observable<any>{
    return this.httpClient.get(this.apiURL+'/caracteristiques/?id_art='+value)
    .pipe(
      catchError(this.errorHandler))
  }

  getCaractbyArt(idart: number){
    return this.httpClient.get(this.apiURL+ '/caractsbyart/'+idart)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<any>{
    return this.httpClient.get(this.apiURL+'/articles')
    .pipe(
      catchError(this.errorHandler))
  }

  create(article:articles):Observable<any>{
    return this.httpClient.post(this.apiURL+'/articles',JSON.stringify(article), this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }

  createArtCaract(artCaract:art_caracts):Observable<any>{
    return this.httpClient.post(this.apiURL+'/art_caracts',JSON.stringify(artCaract), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:number):Observable<any>{
    return this.httpClient.get(this.apiURL + '/articles/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  findArtCaract(id:number):Observable<any>{
    return this.httpClient.get(this.apiURL + '/art_caracts/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  findSF(id:number):Observable<any>{
    return this.httpClient.get(this.apiURL + '/sous-familles/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update (id:number , article:articles):Observable<any>{
    return this.httpClient.put(this.apiURL  + '/articles/' + id, JSON.stringify(article), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  updateArtCaract (id:number ,artCaract:art_caracts):Observable<any>{
    return this.httpClient.put(this.apiURL  + '/art_caracts/' + id, JSON.stringify(artCaract), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/articles/' + id, this.httpOptions)

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

 showcaracteristique(idart:number){
  return this.httpClient.get(this.apiURL+'/caracta/'+ idart)
  .pipe(
    catchError(this.errorHandler)
  )
}
}
