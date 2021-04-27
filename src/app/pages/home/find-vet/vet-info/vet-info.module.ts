import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';

import { VetInfoPageRoutingModule } from './vet-info-routing.module';

import { VetInfoPage } from './vet-info.page';
import { MatButtonModule } from '@angular/material/button';
import { BottomNavComponent } from 'src/app/components/bottom-nav/bottom-nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VetInfoPageRoutingModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [VetInfoPage, BottomNavComponent]
})
export class VetInfoPageModule {}
