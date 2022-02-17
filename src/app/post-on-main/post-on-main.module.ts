import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostOnMainPageRoutingModule } from './post-on-main-routing.module';

import { PostOnMainPage } from './post-on-main.page';

// import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostOnMainPageRoutingModule,
    // AngularFireStorageModule
  ],
  declarations: []
})
export class PostOnMainPageModule {}
