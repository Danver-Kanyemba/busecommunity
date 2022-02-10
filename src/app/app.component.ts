import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { PostImageMaximizeService } from './post-image-maximize.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  urlForPostImage;
  constructor(
    public afAuth: AngularFireAuth
    ) {

    }

    ngOnInit(): void {

  }
  async signIn(){

    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(googleAuthProvider);
    console.log(credential.user);
    // await this.user_service.updateUserData(credential.user);

  }


}
