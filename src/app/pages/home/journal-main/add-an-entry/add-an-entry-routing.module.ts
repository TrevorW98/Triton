import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAnEntryPage } from './add-an-entry.page';

const routes: Routes = [
  {
    path: '',
    component: AddAnEntryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAnEntryPageRoutingModule {}
