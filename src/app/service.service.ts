import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {



  BACKEND_URL: any;
  constructor(private http: HttpClient) {

    this.BACKEND_URL = "http://127.0.0.1:8000/api/auth/";
  }

  //Trusted backend
  checkJWT() {
    return this.http.get(this.BACKEND_URL + 'user-profile', this.getJWT());
  }

  getJWT() {
    let JWT = localStorage.getItem('JWT');
    return { headers: new HttpHeaders().set('Authorization', 'Bearer ' + JWT) };
  }

  logIn(body: any) {
    body = {
      email: body.email,
      password: body.password,
    };
    return this.http.post("http://127.0.0.1:8000/api/auth/login", body);
  }
  SignIn(body: any) {
    body = {
      name: body.name,

      email: body.email,
      password: body.password,
    };
    return this.http.post(this.BACKEND_URL + 'users/signin/', body);
  }

  //for post method

  CORSheaders() {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append(
      'Access-Control-Allow-Headers',
      'Origin, Content-Type, X-Auth-Token'
    );
    headers.append('Access-Control-Allow-Methods', ' GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');
    headers.append('withCredentials', 'true');
    return { headers: headers };
  }


}

