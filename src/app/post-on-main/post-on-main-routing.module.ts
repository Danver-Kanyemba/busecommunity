import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostOnMainPage } from './post-on-main.page';

const routes: Routes = [
  {
    path: '',
    component: PostOnMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostOnMainPageRoutingModule {}
