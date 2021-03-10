import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JournalMainPage } from './journal-main.page';

const routes: Routes = [
  {
    path: '',
    component: JournalMainPage
  },
  {
    path: 'journal-entries',
    loadChildren: () => import('./journal-entries/journal-entries.module').then( m => m.JournalEntriesPageModule)
  },
  {
    path: 'add-an-entry',
    loadChildren: () => import('./add-an-entry/add-an-entry.module').then( m => m.AddAnEntryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournalMainPageRoutingModule {}
