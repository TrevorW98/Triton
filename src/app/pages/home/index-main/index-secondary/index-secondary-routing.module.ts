import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexSecondaryPage } from './index-secondary.page';

const routes: Routes = [
  {
    path: '',
    component: IndexSecondaryPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexSecondaryPageRoutingModule {}
