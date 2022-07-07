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
    let headers = this.getTokenAndGenerateHeader()
    return this.http.get(`${this.url}/vino/getVinosByIdProductor?idProductor=${usuario.idUsuario}`, { headers: headers }).toPromise()
  }
  deleteVino(idVino: number) {
    let headers = this.getTokenAndGenerateHeader()
    return this.http.delete(`${this.url}vino/deleteVino?id=${idVino}`, { headers: headers }).toPromise()
  }
  setVino(body) {
    let usuario: Usuario = JSON.parse(sessionStorage.getItem('user'))
    const headers: any = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${usuario.Token}`
    })
    body.idProductor = usuario.idUsuario
    return this.http.put(`${this.url}vino/insertVino`, body, { headers: headers }).toPromise()
  }

  generarPuntaje(idVino: number) {
    let headers = this.getTokenAndGenerateHeader()
    return this.http.post(`${this.url}vino/predictionQuality?idVino=${idVino}`, null, { headers: headers }).toPromise()
  }

  getTokenAndGenerateHeader() {
    let usuario: Usuario = JSON.parse(sessionStorage.getItem('user'))
    let headers: any = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${usuario.Token}`
    })
    return headers
  }
  getAllVinos() {
    let headers = this.getTokenAndGenerateHeader()
    return this.http.get(`${this.url}/vino/getAllVinos`, { headers: headers }).toPromise()
  }
}
