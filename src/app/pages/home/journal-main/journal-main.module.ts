import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {MatIconModule} from '@angular/material/icon';
import { JournalMainPageRoutingModule } from './journal-main-routing.module';

import { JournalMainPage } from './journal-main.page';
import { MatButtonModule } from '@angular/material/button';
import { BottomNavComponent } from 'src/app/components/bottom-nav/bottom-nav.component';
import { TopNavComponent } from 'src/app/components/top-nav/top-nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JournalMainPageRoutingModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [JournalMainPage, BottomNavComponent, TopNavComponent]
})
export class JournalMainPageModule {}
