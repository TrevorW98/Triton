import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'my-pets',
    loadChildren: () => import('./my-pets/my-pets.module').then( m => m.MyPetsPageModule)
  },
  {
    path: 'find-vet',
    loadChildren: () => import('./find-vet/find-vet.module').then( m => m.FindVetPageModule)
  },
  {
    path: 'documents-main',
    loadChildren: () => import('./documents-main/documents-main.module').then( m => m.DocumentsMainPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
