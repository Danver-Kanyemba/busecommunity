import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoriesPreviewPageRoutingModule } from './stories-preview-routing.module';

import { StoriesPreviewPage } from './stories-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoriesPreviewPageRoutingModule
  ],
  declarations: [StoriesPreviewPage]
})
export class StoriesPreviewPageModule {}
