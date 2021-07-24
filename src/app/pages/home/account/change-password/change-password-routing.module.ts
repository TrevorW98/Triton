import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountPageModule } from '../account.module';

import { ChangePasswordPage } from './change-password.page';

const routes: Routes = [
  {
    path: '',
    component: ChangePasswordPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangePasswordPageRoutingModule {}
