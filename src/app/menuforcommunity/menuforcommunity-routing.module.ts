import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuforcommunityPage } from './menuforcommunity.page';

const routes: Routes = [
  {
    path: '',
    component: MenuforcommunityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuforcommunityPageRoutingModule {}
