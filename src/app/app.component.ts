import { PopOverPage } from './pop-over/pop-over.page';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { PostImageMaximizeService } from './post-image-maximize.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  urlForPostImage;
  constructor(
    public popoverController: PopoverController,
    public afAuth: AngularFireAuth,
    private userService: UserService
    ) {}

    ngOnInit(): void {
  }

  async signIn(){

    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(googleAuthProvider);
    console.log(credential.user);
    await this.userService.updateUserData(credential.user);
  }

  opo(input){
    console.log(input);
  }

async openPopOver(ev){
  const popover = await this.popoverController.create({
    component: PopOverPage,
    event: ev,
    translucent: true
  });
  return await popover.present();
  }
}
