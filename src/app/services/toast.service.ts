import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }
  async presentToast(mensaje: string, clase: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 4000,
      cssClass: clase,
      position: 'top'
    });
    toast.present();
  }
}
