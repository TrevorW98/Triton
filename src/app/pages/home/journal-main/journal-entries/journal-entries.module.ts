import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {MatIconModule} from '@angular/material/icon';
import { JournalEntriesPageRoutingModule } from './journal-entries-routing.module';

import { JournalEntriesPage } from './journal-entries.page';
import { MatButtonModule } from '@angular/material/button';
import { BottomNavComponent } from 'src/app/components/bottom-nav/bottom-nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JournalEntriesPageRoutingModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [JournalEntriesPage, BottomNavComponent]
})
export class JournalEntriesPageModule {}
