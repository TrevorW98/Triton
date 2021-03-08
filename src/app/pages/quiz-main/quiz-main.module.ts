import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizMainPageRoutingModule } from './quiz-main-routing.module';

import { QuizMainPage } from './quiz-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizMainPageRoutingModule
  ],
  declarations: [QuizMainPage]
})
export class QuizMainPageModule {}
