import { AboutPage } from './../about/about.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuforcommunityPageRoutingModule } from './menuforcommunity-routing.module';

import { MenuforcommunityPage } from './menuforcommunity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuforcommunityPageRoutingModule
  ],
  declarations: [
    MenuforcommunityPage,
    AboutPage
  ]
})
export class MenuforcommunityPageModule {}
