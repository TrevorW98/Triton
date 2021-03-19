import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPetsPageRoutingModule } from './my-pets-routing.module';

import { MyPetsPage } from './my-pets.page';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPetsPageRoutingModule,
    MatButtonModule
  ],
  declarations: [MyPetsPage]
})
export class MyPetsPageModule {}
