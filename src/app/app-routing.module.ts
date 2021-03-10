import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./pages/splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'events-notifs',
    loadChildren: () => import('./pages/home/events-notifs/events-notifs.module').then( m => m.EventsNotifsPageModule)
  },
  {
    path: 'feeding-times',
    loadChildren: () => import('./pages/home/feeding-times/feeding-times.module').then( m => m.FeedingTimesPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/home/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'change-email',
    loadChildren: () => import('./pages/home/account/change-email/change-email.module').then( m => m.ChangeEmailPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/home/account/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'index-main',
    loadChildren: () => import('./pages/home/index-main/index-main.module').then( m => m.IndexMainPageModule)
  },
  {
    path: 'quiz-main',
    loadChildren: () => import('./pages/home/quiz-main/quiz-main.module').then( m => m.QuizMainPageModule)
  },
  {
    path: 'journal-main',
    loadChildren: () => import('./pages/home/journal-main/journal-main.module').then( m => m.JournalMainPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
