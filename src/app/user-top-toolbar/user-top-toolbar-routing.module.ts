import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserTopToolbarPage } from './user-top-toolbar.page';

const routes: Routes = [
  {
    path: '',
    component: UserTopToolbarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserTopToolbarPageRoutingModule {}
