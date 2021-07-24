import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalInfoPageRoutingModule } from './animal-info-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { AnimalInfoPage } from './animal-info.page';
import { MatButtonModule } from '@angular/material/button';
import { BottomNavComponent } from 'src/app/components/bottom-nav/bottom-nav.component';
import { TopNavComponent } from 'src/app/components/top-nav/top-nav.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalInfoPageRoutingModule,
    MatIconModule,
    MatButtonModule,
   
  ],
  declarations: [AnimalInfoPage, BottomNavComponent, TopNavComponent]
})
export class AnimalInfoPageModule {}
