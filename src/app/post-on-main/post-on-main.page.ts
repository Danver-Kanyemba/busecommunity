import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-post-on-main',
  templateUrl: './post-on-main.page.html',
  styleUrls: ['./post-on-main.page.scss'],
})
export class PostOnMainPage implements OnInit {
 form;
 stories$: AngularFireList<any[]> | undefined;

  constructor(
    private menu: MenuController,
    private toastController: ToastController,
    private fb: FormBuilder,
    private db: AngularFireDatabase
    ) { }

  ngOnInit() {
    this.stories$ = this.db.list('/test');

    this.form = this.fb.group({
      title: [
        '',
        [Validators.required],
      ]
    });
  }

  get title(){
    return this.form.get('title');
  }

  closeMenu(){
    this.menu.close('piz');
  }



  async guestPost(){

    this.stories$.push(this.form.value).then(()=>{
      console.log('form submited');

    });

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
