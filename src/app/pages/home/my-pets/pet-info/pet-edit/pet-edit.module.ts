import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';

import { PetEditPageRoutingModule } from './pet-edit-routing.module';

import { PetEditPage } from './pet-edit.page';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetEditPageRoutingModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [PetEditPage]
})
export class PetEditPageModule {}
