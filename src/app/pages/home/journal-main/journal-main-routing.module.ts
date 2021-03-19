import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JournalMainPage } from './journal-main.page';

const routes: Routes = [
  {
    path: '',
    component: JournalMainPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournalMainPageRoutingModule {}
