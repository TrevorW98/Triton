import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexMainPage } from './index-main.page';

const routes: Routes = [
  {
    path: '',
    component: IndexMainPage
  },
  {
    path: 'index-secondary',
    loadChildren: () => import('./index-secondary/index-secondary.module').then( m => m.IndexSecondaryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexMainPageRoutingModule {}
