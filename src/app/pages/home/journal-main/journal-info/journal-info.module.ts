import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {MatIconModule} from '@angular/material/icon';
import { JournalInfoPageRoutingModule } from './journal-info-routing.module';

import { JournalInfoPage } from './journal-info.page';
import { MatButtonModule } from '@angular/material/button';
import { BottomNavComponent } from 'src/app/components/bottom-nav/bottom-nav.component';
import { TopNavComponent } from 'src/app/components/top-nav/top-nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JournalInfoPageRoutingModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [JournalInfoPage, TopNavComponent,
    BottomNavComponent,]
})
export class JournalInfoPageModule {}
