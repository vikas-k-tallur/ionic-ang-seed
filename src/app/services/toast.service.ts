import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  async presentToast(infoMessage: string,toastType?:string) {
    const toast = await this.toastController.create({
      message: infoMessage,
      color: !!toastType?toastType:'dark',
      duration: 2500
    });
    toast.present();
  }
}
