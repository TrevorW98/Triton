import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAnEntryPageRoutingModule } from './add-an-entry-routing.module';

import { AddAnEntryPage } from './add-an-entry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAnEntryPageRoutingModule
  ],
  declarations: [AddAnEntryPage]
})
export class AddAnEntryPageModule {}
