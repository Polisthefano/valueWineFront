import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class VinoService {
  url = environment.urlBase;
  constructor(private http: HttpClient) {
  }
  getVinosByIdProductor(usuario: Usuario) {
    const headers: any = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${usuario.Token}`
    })
    return this.http.get(`${this.url}/vino/getVinosByIdProductor?idProductor=${usuario.idUsuario}`, { headers: headers }).toPromise()
  }
  deleteVino(idVino: number) {
    let usuario: Usuario = JSON.parse(sessionStorage.getItem('user'))
    const headers: any = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${usuario.Token}`
    })
    return this.http.delete(`${this.url}vino/deleteVino?id=${idVino}`, { headers: headers }).toPromise()
  }
  setVino(body) {
    let usuario: Usuario = JSON.parse(sessionStorage.getItem('user'))
    const headers: any = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${usuario.Token}`
    })
    body.idProductor = usuario.idUsuario
    console.log(body);

    return this.http.put(`${this.url}vino/insertVino`, body, { headers: headers }).toPromise()
  }
}
