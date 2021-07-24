import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindVetPage } from './find-vet.page';

const routes: Routes = [
  {
    path: '',
    component: FindVetPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindVetPageRoutingModule {}
