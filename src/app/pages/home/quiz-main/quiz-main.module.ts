import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';

import { QuizMainPageRoutingModule } from './quiz-main-routing.module';

import { QuizMainPage } from './quiz-main.page';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizMainPageRoutingModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [QuizMainPage]
})
export class QuizMainPageModule {}
