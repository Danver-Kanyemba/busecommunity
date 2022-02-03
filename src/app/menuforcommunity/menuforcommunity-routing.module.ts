import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuforcommunityPage } from './menuforcommunity.page';

const routes: Routes = [
  {
    path: '',
    component: MenuforcommunityPage
  },
  {
    path: 'sign-in',
    loadChildren: () => import('../sign-in/sign-in.module').then( m => m.SignInPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuforcommunityPageRoutingModule {}
