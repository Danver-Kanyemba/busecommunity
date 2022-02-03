import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-post-on-main',
  templateUrl: './post-on-main.page.html',
  styleUrls: ['./post-on-main.page.scss'],
})
export class PostOnMainPage implements OnInit {

  constructor(
    private menu: MenuController,
    private toastController: ToastController

    ) { }

  ngOnInit() {
  }
  closeMenu(){
    this.menu.close('piz');
  }


  async guestPost(){
    const toast = await this.toastController.create({
      message: 'Guests are not yet permitted to post',
      position: 'bottom',
      duration: 3000,
      buttons: [
        {
        side: 'end',
        icon: 'close',
        role: 'cancel'
        }
      ]
    });
    toast.present();
  }
}
