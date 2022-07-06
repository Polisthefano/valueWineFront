import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { ToastService } from './toast.service';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  url = environment.urlBase;
  constructor(private http: HttpClient, private toastService: ToastService) { }

  checkSesion(productor?: boolean) {
    let usuario: Usuario | any = this.sessionStorageGet('user')
    if (!usuario) {
      usuario = ''
    }
    const headers: any = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${usuario.Token}`
    })


    return this.http.get(`${this.url}usuario/checkSesion`, { headers: headers }).pipe(map((user: any) => {
      usuario.Token = user.token
      this.sessionStorageSet('user', usuario)
      if (productor) {
        if (usuario.Rol == 1) {
          return true
        }
        else {
          return of('err')
        }
      }
      else {
        return true
      }

    }), catchError(err => {
      if (err.error.code == 518) {
        this.toastService.presentToast(`Sesion Expirada`, 'toastError').then(resp => {
        })
      }
      return of(err)
    }))
  }
  login(bodyRequest) {

    return this.http.post(`${this.url}usuario/loginUsuario`, bodyRequest).toPromise()
  }
  createAccount(bodyRequest) {

    return this.http.put(`${this.url}usuario/insertUsuario`, bodyRequest).toPromise()
  }
  sessionStorageSet(key: string, value) {
    sessionStorage.setItem(key, JSON.stringify(value))
  }
  sessionStorageGet(key: string) {
    return JSON.parse(sessionStorage.getItem(key))
  }
  deleteSession() {
    sessionStorage.removeItem('user')
  }
}
