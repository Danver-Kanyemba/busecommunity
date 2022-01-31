import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupsSlidesPageRoutingModule } from './groups-slides-routing.module';

import { GroupsSlidesPage } from './groups-slides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupsSlidesPageRoutingModule
  ],
  declarations: []
})
export class GroupsSlidesPageModule {}
