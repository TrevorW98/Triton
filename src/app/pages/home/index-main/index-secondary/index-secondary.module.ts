import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexSecondaryPageRoutingModule } from './index-secondary-routing.module';

import { IndexSecondaryPage } from './index-secondary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexSecondaryPageRoutingModule
  ],
  declarations: [IndexSecondaryPage]
})
export class IndexSecondaryPageModule {}
