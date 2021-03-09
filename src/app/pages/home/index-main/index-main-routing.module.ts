import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexMainPage } from './index-main.page';

const routes: Routes = [
  {
    path: '',
    component: IndexMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexMainPageRoutingModule {}
