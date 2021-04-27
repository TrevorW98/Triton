import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import { PetInfoPageRoutingModule } from './pet-info-routing.module';
import { PetInfoPage } from './pet-info.page';
import { MatButtonModule } from '@angular/material/button';
import { BottomNavComponent } from 'src/app/components/bottom-nav/bottom-nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetInfoPageRoutingModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [PetInfoPage, BottomNavComponent]
})
export class PetInfoPageModule {}
