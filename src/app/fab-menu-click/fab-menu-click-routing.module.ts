import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FabMenuClickPage } from './fab-menu-click.page';

const routes: Routes = [
  {
    path: '',
    component: FabMenuClickPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FabMenuClickPageRoutingModule {}
