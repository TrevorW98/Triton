import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindVetPageRoutingModule } from './find-vet-routing.module';

import { FindVetPage } from './find-vet.page';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindVetPageRoutingModule,
    MatButtonModule
  ],
  declarations: [FindVetPage]
})
export class FindVetPageModule {}
