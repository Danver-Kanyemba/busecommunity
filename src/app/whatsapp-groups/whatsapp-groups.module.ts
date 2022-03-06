import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatsappGroupsPageRoutingModule } from './whatsapp-groups-routing.module';

import { WhatsappGroupsPage } from './whatsapp-groups.page';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatsappGroupsPageRoutingModule,
    AngularFireStorageModule
  ],
  declarations: [
      WhatsappGroupsPage

    ]
})
export class WhatsappGroupsPageModule {}
