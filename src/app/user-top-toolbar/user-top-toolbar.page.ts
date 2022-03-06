import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from '../user.service';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-user-top-toolbar',
  templateUrl: './user-top-toolbar.page.html',
  styleUrls: ['./user-top-toolbar.page.scss'],
})
export class UserTopToolbarPage implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    private userService: UserService

  ) { }

  ngOnInit() {
  }

  clickFacebook(){
    window.open('https://www.facebook.com/danver.kanyemba/');
  }
  clickWhatsapp(){
    window.open('https://wa.me/+263784017784');
  }
  clickLinkedIn(){
    window.open('https://www.linkedin.com/in/danver-kanyemba/');
  }


  async signIn(){

    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(googleAuthProvider);
    await this.userService.updateUserData(credential.user);
  }
}
