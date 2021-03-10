import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizMainPage } from './quiz-main.page';

const routes: Routes = [
  {
    path: '',
    component: QuizMainPage
  },
  {
    path: 'questions',
    loadChildren: () => import('./questions/questions.module').then( m => m.QuestionsPageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results.module').then( m => m.ResultsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizMainPageRoutingModule {}
