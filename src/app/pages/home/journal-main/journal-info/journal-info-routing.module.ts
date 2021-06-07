import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JournalInfoPage } from './journal-info.page';

const routes: Routes = [
  {
    path: '',
    component: JournalInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournalInfoPageRoutingModule {}
