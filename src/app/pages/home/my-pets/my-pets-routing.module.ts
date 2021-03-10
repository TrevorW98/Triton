import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPetsPage } from './my-pets.page';

const routes: Routes = [
  {
    path: '',
    component: MyPetsPage
  },
  {
    path: 'add-pet',
    loadChildren: () => import('./add-pet/add-pet.module').then( m => m.AddPetPageModule)
  },
  {
    path: 'pet-info',
    loadChildren: () => import('./pet-info/pet-info.module').then( m => m.PetInfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPetsPageRoutingModule {}
