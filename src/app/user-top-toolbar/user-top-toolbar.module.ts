import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserTopToolbarPageRoutingModule } from './user-top-toolbar-routing.module';

import { UserTopToolbarPage } from './user-top-toolbar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserTopToolbarPageRoutingModule
  ],
  declarations: []
})
export class UserTopToolbarPageModule {}
