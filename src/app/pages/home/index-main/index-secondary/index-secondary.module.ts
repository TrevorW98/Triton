import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexSecondaryPageRoutingModule } from './index-secondary-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { IndexSecondaryPage } from './index-secondary.page';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexSecondaryPageRoutingModule,
    MatButtonModule,
    MatIconModule,
    
  ],
  declarations: [IndexSecondaryPage]
})
export class IndexSecondaryPageModule {}
