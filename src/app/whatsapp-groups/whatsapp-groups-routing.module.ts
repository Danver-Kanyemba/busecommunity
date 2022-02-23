import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatsappGroupsPage } from './whatsapp-groups.page';

const routes: Routes = [
  {
    path: '',
    component: WhatsappGroupsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatsappGroupsPageRoutingModule {}
