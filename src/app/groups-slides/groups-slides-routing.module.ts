import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupsSlidesPage } from './groups-slides.page';

const routes: Routes = [
  {
    path: '',
    component: GroupsSlidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupsSlidesPageRoutingModule {}
