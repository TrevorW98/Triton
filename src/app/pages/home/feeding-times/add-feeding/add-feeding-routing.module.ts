import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFeedingPage } from './add-feeding.page';

const routes: Routes = [
  {
    path: '',
    component: AddFeedingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFeedingPageRoutingModule {}
