import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizMainPage } from './quiz-main.page';

const routes: Routes = [
  {
    path: '',
    component: QuizMainPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizMainPageRoutingModule {}
