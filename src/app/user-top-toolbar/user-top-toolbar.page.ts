import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/compat';

@Component({
  selector: 'app-user-top-toolbar',
  templateUrl: './user-top-toolbar.page.html',
  styleUrls: ['./user-top-toolbar.page.scss'],
})
export class UserTopToolbarPage implements OnInit {

  constructor() { }

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
}
