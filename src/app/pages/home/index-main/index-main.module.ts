import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexMainPageRoutingModule } from './index-main-routing.module';

import { IndexMainPage } from './index-main.page';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexMainPageRoutingModule,
    MatButtonModule
  ],
  declarations: [IndexMainPage]
})
export class IndexMainPageModule {}
