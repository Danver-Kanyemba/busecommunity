import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-whatsapp-groups',
  templateUrl: './whatsapp-groups.page.html',
  styleUrls: ['./whatsapp-groups.page.scss'],
})
export class WhatsappGroupsPage implements OnInit {

  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {

  }

  get getImageURL(){
    const ref = this.storage.ref('users/davideast.jpg');
    return ref.getDownloadURL();
  }
}
