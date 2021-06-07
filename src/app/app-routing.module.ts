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
    path: 'documents-main',
    loadChildren: () => import('./pages/home/documents-main/documents-main.module').then( m => m.DocumentsMainPageModule)
  },
  {
    path: 'individual-pet-docs',
    loadChildren: () => import('./pages/home/documents-main/individual-pet-docs/individual-pet-docs.module').then( m => m.IndividualPetDocsPageModule)
  },
  {
    path: 'events-notifs',
    loadChildren: () => import('./pages/home/events-notifs/events-notifs.module').then( m => m.EventsNotifsPageModule)
  },
  {
    path: 'add-events',
    loadChildren: () => import('./pages/home/events-notifs/add-events/add-events.module').then( m => m.AddEventsPageModule)
  },
  {
    path: 'feeding-times',
    loadChildren: () => import('./pages/home/feeding-times/feeding-times.module').then( m => m.FeedingTimesPageModule)
  },
  {
    path: 'add-feeding',
    loadChildren: () => import('./pages/home/feeding-times/add-feeding/add-feeding.module').then( m => m.AddFeedingPageModule)
  },
  {
    path: 'find-vet',
    loadChildren: () => import('./pages/home/find-vet/find-vet.module').then( m => m.FindVetPageModule)
  },
  {
    path: 'vet-info',
    loadChildren: () => import('./pages/home/find-vet/vet-info/vet-info.module').then( m => m.VetInfoPageModule)
  },
  {
    path: 'index-main',
    loadChildren: () => import('./pages/home/index-main/index-main.module').then( m => m.IndexMainPageModule)
  },
  {
    path: 'index-secondary',
    loadChildren: () => import('./pages/home/index-main/index-secondary/index-secondary.module').then( m => m.IndexSecondaryPageModule)
  },
  {
    path: 'animal-info',
    loadChildren: () => import('./pages/home/index-main/index-secondary/animal-info/animal-info.module').then( m => m.AnimalInfoPageModule)
  },
  {
    path: 'journal-main',
    loadChildren: () => import('./pages/home/journal-main/journal-main.module').then( m => m.JournalMainPageModule)
  },
  {
    path: 'add-an-entry',
    loadChildren: () => import('./pages/home/journal-main/add-an-entry/add-an-entry.module').then( m => m.AddAnEntryPageModule)
  },
  {
    path: 'journal-entries',
    loadChildren: () => import('./pages/home/journal-main/journal-entries/journal-entries.module').then( m => m.JournalEntriesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/home/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/home/login/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'my-pets',
    loadChildren: () => import('./pages/home/my-pets/my-pets.module').then( m => m.MyPetsPageModule)
  },
  {
    path: 'add-pet',
    loadChildren: () => import('./pages/home/my-pets/add-pet/add-pet.module').then( m => m.AddPetPageModule)
  },
  {
    path: 'pet-info/:id',
    loadChildren: () => import('./pages/home/my-pets/pet-info/pet-info.module').then( m => m.PetInfoPageModule)
  },
  {
    path: 'pet-edit/:id',
    loadChildren: () => import('./pages/home/my-pets/pet-info/pet-edit/pet-edit.module').then( m => m.PetEditPageModule)
  },
  {
    path: 'quiz-main',
    loadChildren: () => import('./pages/home/quiz-main/quiz-main.module').then( m => m.QuizMainPageModule)
  },
  {
    path: 'questions',
    loadChildren: () => import('./pages/home/quiz-main/questions/questions.module').then( m => m.QuestionsPageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./pages/home/quiz-main/results/results.module').then( m => m.ResultsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
