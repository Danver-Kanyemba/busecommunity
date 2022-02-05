import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostImageClickPageRoutingModule } from './post-image-click-routing.module';

import { PostImageClickPage } from './post-image-click.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostImageClickPageRoutingModule
  ],
  declarations: []
})
export class PostImageClickPageModule {}
