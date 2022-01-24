import { EventEmitter, Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { VinoService } from './vino.service';


@Injectable({
  providedIn: 'root'
})
export class ToastService {
  eventoBorradoVino: EventEmitter<any> = new EventEmitter()
  constructor(private toastController: ToastController, private vinoService: VinoService) { }
  async presentToast(mensaje: string, clase: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 4000,
      cssClass: clase,
      position: 'top'
    });
    toast.present();
  }
  async presentToastWithOptions(titulo: string, clase: string, icon: string, mensaje?: string) {
    const toast = await this.toastController.create({
      header: titulo,
      message: mensaje,
      cssClass: clase,
      icon: icon,
      position: 'top',
      buttons: [
        {
          side: 'start',
          text: 'Borrar',
          role: 'hola',
          cssClass: "text-dark",
          handler: () => {
            this.eventoBorradoVino.emit()
          }
        }, {
          text: 'Cancelar',
          cssClass: "txt-dark",
          role: 'cancel',
          handler: () => {

          }
        }
      ]
    });
    await toast.present();
  }
}
