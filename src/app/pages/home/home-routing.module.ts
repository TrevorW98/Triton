import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  // {
  //   path: 'account',
  //   loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  // },
  // {
  //   path: 'documents-main',
  //   loadChildren: () => import('./documents-main/documents-main.module').then( m => m.DocumentsMainPageModule)
  // },
  // {
  //   path: 'events-notifs',
  //   loadChildren: () => import('./events-notifs/events-notifs.module').then( m => m.EventsNotifsPageModule)
  // },
  // {
  //   path: 'feeding-times',
  //   loadChildren: () => import('./feeding-times/feeding-times.module').then( m => m.FeedingTimesPageModule)
  // },
  // {
  //   path: 'find-vet',
  //   loadChildren: () => import('./find-vet/find-vet.module').then( m => m.FindVetPageModule)
  // },
  // {
  //   path: 'index-main',
  //   loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: 'journal-main',
  //   loadChildren: () => import('./journal-main/journal-main.module').then( m => m.JournalMainPageModule)
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: 'my-pets',
  //   loadChildren: () => import('./my-pets/my-pets.module').then( m => m.MyPetsPageModule)
  // },
  // {
  //   path: 'quiz-main',
  //   loadChildren: () => import('./quiz-main/quiz-main.module').then( m => m.QuizMainPageModule)
  // },
  // {
  //   path: 'settings',
  //   loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
