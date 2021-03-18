import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentsMainPage } from './documents-main.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentsMainPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentsMainPageRoutingModule {}
