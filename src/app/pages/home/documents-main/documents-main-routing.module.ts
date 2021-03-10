import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentsMainPage } from './documents-main.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentsMainPage
  },
  {
    path: 'individual-pet-docs',
    loadChildren: () => import('./individual-pet-docs/individual-pet-docs.module').then( m => m.IndividualPetDocsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentsMainPageRoutingModule {}
