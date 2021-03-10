import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JournalEntriesPage } from './journal-entries.page';

const routes: Routes = [
  {
    path: '',
    component: JournalEntriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournalEntriesPageRoutingModule {}
