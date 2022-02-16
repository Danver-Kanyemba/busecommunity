import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MenuController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-post-on-main',
  templateUrl: './post-on-main.page.html',
  styleUrls: ['./post-on-main.page.scss'],
})
export class PostOnMainPage implements OnInit {
 form;
 uidForUser;
 user;
 stories$: AngularFireList<any[]> | undefined;

  constructor(
    private menu: MenuController,
    private toastController: ToastController,
    private fb: FormBuilder,
    private db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    ) { }

  ngOnInit() {
    this.stories$ = this.db.list('/test');

    this.form = this.fb.group({
      title: [
        '',
        [
          Validators.required
        ],
      ],
    });
  }

  get title(){
    return this.form.get('title');
  }

  closeMenu(){
    this.menu.close('piz');
  }

  getUid() {
    // this.uidForUser = this.afAuth.auth.currentUser.uid
    }

  async guestPost(input){
    this.getUid();

    console.log(this.uidForUser);
//     this.afAuth.idToken.subscribe(
//       (user: any)=>{
//         this.user = user;

//     this.stories$.push([this.form.value, user.auth.uid]).then(()=>{
//       console.log('form submited');
// });

//     });
// TODO::fix object error with any

const postG = {

  details: this.form.value,
  userID: input
};

    this.stories$.push(input).then(()=>{
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
