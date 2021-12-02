import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoriesPreviewPage } from './stories-preview.page';

const routes: Routes = [
  {
    path: '',
    component: StoriesPreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoriesPreviewPageRoutingModule {}
