import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { PostImageMaximizeService } from '../post-image-maximize.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-menuforcommunity',
  templateUrl: './menuforcommunity.page.html',
  styleUrls: ['./menuforcommunity.page.scss'],
})
export class MenuforcommunityPage implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    private userService: UserService,
    private postImageMaximizeService: PostImageMaximizeService,
    private menu: MenuController
  ) { }

  ngOnInit() {
  }

  async signIn(){

    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(googleAuthProvider);
    console.log(credential.user);
    await this.userService.updateUserData(credential.user);
  }
  signOut(){
    this.afAuth.signOut();
  }
  showAvatar(input){
    console.log(input);
    const gg = input;

    this.postImageMaximizeService.urlForImage = gg;
    this.menu.toggle('imagePost');
  }
}
