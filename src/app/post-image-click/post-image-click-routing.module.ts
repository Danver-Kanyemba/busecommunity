import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostImageClickPage } from './post-image-click.page';

const routes: Routes = [
  {
    path: '',
    component: PostImageClickPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostImageClickPageRoutingModule {}
