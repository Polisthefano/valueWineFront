import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  url = environment.urlBase;
  constructor(private http: HttpClient) { }

  checkSesion() {
    const headers: any = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InBydWViYUBlbWFpbC5jb20iLCJyb2wiOjAsImlkVXN1YXJpbyI6MiwiZXhwIjoxNjQxNTE5MzMzfQ.cIJD7muA3X1VLOEt2aTdtiXvxzjUjXKvOa26V0vzCio`
    })
    return this.http.get(`${this.url}usuario/checkSesion`, { headers: headers }).pipe(map(user => {
      console.log(user);
      return true
    }), catchError(err => {
      return of(err)
    }))
  }
  login(bodyRequest) {

    return this.http.post(`${this.url}usuario/loginUsuario`, bodyRequest).toPromise()
  }
  createAccount(bodyRequest) {

    return this.http.put(`${this.url}usuario/insertUsuario`, bodyRequest).toPromise()
  }
}
