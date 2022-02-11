import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.page.html',
  styleUrls: ['./pop-over.page.scss'],
})
export class PopOverPage implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,

  ) { }

  ngOnInit() {
  }

  signOut(){
    this.afAuth.signOut();
  }
}
