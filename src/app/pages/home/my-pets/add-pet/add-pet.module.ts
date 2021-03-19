import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';

import { AddPetPageRoutingModule } from './add-pet-routing.module';

import { AddPetPage } from './add-pet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPetPageRoutingModule,
    MatIconModule
  ],
  declarations: [AddPetPage]
})
export class AddPetPageModule {}
