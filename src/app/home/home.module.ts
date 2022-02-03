import { FabMenuClickPage } from './../fab-menu-click/fab-menu-click.page';
import { StoriesPage } from './../stories/stories.page';
import { GroupsSlidesPage } from './../groups-slides/groups-slides.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule

  ],
  declarations: [
    HomePage,
    GroupsSlidesPage,
    StoriesPage,
    FabMenuClickPage
  ]
})
export class HomePageModule {}
