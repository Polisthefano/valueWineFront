import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario.model';
import { MainService } from 'src/app/services/main.service';
import { ToastService } from 'src/app/services/toast.service';
import { VinoService } from 'src/app/services/vino.service';

@Component({
  selector: 'app-vinos',
  templateUrl: './vinos.component.html',
  styleUrls: ['./vinos.component.scss'],
})
export class VinosComponent implements OnInit {
  modalAgregarVino: boolean = false
  vinos: any = []
  constructor(private mainService: MainService, private vinoService: VinoService, public toastService: ToastService, private router: Router) {
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
  cerrarModal() {
    this.modalAgregarVino = false
  }
  eliminarVino(vinoABorrar) {
    this.toastService.presentToastWithOptions('Estas seguro deseas eliminarlo?', 'toastWarning', 'warning-outline').then(resp => {
    })
    this.toastService.eventoBorradoVino.pipe(take(1)).subscribe(resp => {
      this.vinoService.deleteVino(vinoABorrar.Id).then(res => {
        this.vinos = this.vinos.filter(vino => vino.Id != vinoABorrar.Id)
        this.toastService.presentToast('Vino Eliminado Correctamente', 'toastSucess').then(resp => { })
      }).catch(err => {
        console.log(err);
        let msg = ''
        if (err.error.code == 401) {
          msg = 'Sesion expirada'
          this.router.navigate(['login'])
        } else {
          msg = 'Error al borrar el vino'
        }
        this.toastService.presentToast(msg, 'toastError').then(resp => { })
      })
    })
  }
}
