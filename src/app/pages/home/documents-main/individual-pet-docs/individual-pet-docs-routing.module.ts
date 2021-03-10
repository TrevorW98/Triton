import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndividualPetDocsPage } from './individual-pet-docs.page';

const routes: Routes = [
  {
    path: '',
    component: IndividualPetDocsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndividualPetDocsPageRoutingModule {}
