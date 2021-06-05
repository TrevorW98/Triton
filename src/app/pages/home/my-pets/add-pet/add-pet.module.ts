import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';

import { AddPetPageRoutingModule } from './add-pet-routing.module';

import { AddPetPage } from './add-pet.page';
import { MatButtonModule } from '@angular/material/button';
import { BottomNavComponent } from 'src/app/components/bottom-nav/bottom-nav.component';
import { TopNavComponent } from 'src/app/components/top-nav/top-nav.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPetPageRoutingModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,

  ],
  declarations: [AddPetPage, BottomNavComponent, TopNavComponent]
})
export class AddPetPageModule {}
