import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusecommunitylogoPageRoutingModule } from './busecommunitylogo-routing.module';

import { BusecommunitylogoPage } from './busecommunitylogo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusecommunitylogoPageRoutingModule
  ],
  declarations: [BusecommunitylogoPage]
})
export class BusecommunitylogoPageModule {}
