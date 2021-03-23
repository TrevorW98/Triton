import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {MatIconModule} from '@angular/material/icon';
import { AddAnEntryPageRoutingModule } from './add-an-entry-routing.module';

import { AddAnEntryPage } from './add-an-entry.page';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAnEntryPageRoutingModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [AddAnEntryPage]
})
export class AddAnEntryPageModule {}
