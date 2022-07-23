import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  usuario: Usuario
  constructor(private router: Router, public mainService: MainService) {
    this.usuario = this.mainService.sessionStorageGet('user')
  }

  ngOnInit() {

  }


  navigate(path: string) {
    this.router.navigateByUrl(path);
  }
  cerrarSesion() {
    this.mainService.deleteSession()
    this.navigate('login')
  }
}
