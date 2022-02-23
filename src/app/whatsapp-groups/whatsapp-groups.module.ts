import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatsappGroupsPageRoutingModule } from './whatsapp-groups-routing.module';

import { WhatsappGroupsPage } from './whatsapp-groups.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatsappGroupsPageRoutingModule
  ],
  declarations: []
})
export class WhatsappGroupsPageModule {}
