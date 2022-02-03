import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabMenuClickPageRoutingModule } from './fab-menu-click-routing.module';

import { FabMenuClickPage } from './fab-menu-click.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabMenuClickPageRoutingModule
  ],
  declarations: []
})
export class FabMenuClickPageModule {}
