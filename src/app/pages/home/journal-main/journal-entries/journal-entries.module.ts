import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JournalEntriesPageRoutingModule } from './journal-entries-routing.module';

import { JournalEntriesPage } from './journal-entries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JournalEntriesPageRoutingModule
  ],
  declarations: [JournalEntriesPage]
})
export class JournalEntriesPageModule {}
