import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario.model';
import { MainService } from 'src/app/services/main.service';
import { VinoService } from 'src/app/services/vino.service';

@Component({
  selector: 'app-vinos',
  templateUrl: './vinos.component.html',
  styleUrls: ['./vinos.component.scss'],
})
export class VinosComponent implements OnInit {
  vinos: any = []
  constructor(private mainService: MainService, private vinoService: VinoService) {
    let usuario: Usuario = this.mainService.sessionStorageGet('user')
    this.vinoService.getVinosByIdProductor(usuario).then((resp: any) => {
      this.vinos = resp.vinos
    }).catch(err => {
      if (err.error.code == 404) {
        this.vinos = []
      }
    })
  }

  ngOnInit() { }

}
