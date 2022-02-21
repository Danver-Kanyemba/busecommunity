import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MenuController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { UserService } from '../user.service';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-post-on-main',
  templateUrl: './post-on-main.page.html',
  styleUrls: ['./post-on-main.page.scss'],
})
export class PostOnMainPage implements OnInit {
 form;
 uidForUser='';
 user;
 stories$: AngularFireList<any[]> | undefined;

  constructor(
    private menu: MenuController,
    private toastController: ToastController,
    private fb: FormBuilder,
    private db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    private userService: UserService

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
      userUid:[this.uidForUser,[
        Validators.required
      ]]
    });
  }

  async signIn(){
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(googleAuthProvider);
    await this.userService.updateUserData(credential.user);
  }

  get title(){
    return this.form.get('title');
  }

  closeMenu(){
    this.menu.close('piz');
  }

  async guestPost(input){
    this.afAuth.currentUser.then(res=>{
      const data = {
        data: this.form.value,
        fuser:res.uid
      };
      this.form.controls.userUid.setValue(res.uid);

      this.stories$.push(this.form.value).then(()=>{
        console.log('form submited');
    });
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
