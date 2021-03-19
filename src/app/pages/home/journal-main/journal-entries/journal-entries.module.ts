import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {MatIconModule} from '@angular/material/icon';
import { JournalEntriesPageRoutingModule } from './journal-entries-routing.module';

import { JournalEntriesPage } from './journal-entries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JournalEntriesPageRoutingModule,
    MatIconModule
  ],
  declarations: [JournalEntriesPage]
})
export class JournalEntriesPageModule {}
