import { EventEmitter, Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { VinoService } from './vino.service';


@Injectable({
  providedIn: 'root'
})
export class ToastService {
  evento: EventEmitter<any> = new EventEmitter()
  constructor(private toastController: ToastController, private vinoService: VinoService) { }
  async presentToast(mensaje: string, clase: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 4000,
      animated: true,
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
      animated: true,
      icon: icon,
      position: 'top',
      buttons: [
        {

          text: 'Confirmar',

          handler: () => {
            this.evento.emit()
          }
        }, {
          side: 'start',
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });
    await toast.present();
  }
}
