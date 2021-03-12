import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JournalMainPageRoutingModule } from './journal-main-routing.module';

import { JournalMainPage } from './journal-main.page';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JournalMainPageRoutingModule,
    MatButtonModule
  ],
  declarations: [JournalMainPage]
})
export class JournalMainPageModule {}
