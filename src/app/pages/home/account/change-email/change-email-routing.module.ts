import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeEmailPage } from './change-email.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeEmailPage
  },
  {
    path: 'account',
    loadChildren: () => import('../account.module').then( m => m.AccountPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeEmailPageRoutingModule {}
