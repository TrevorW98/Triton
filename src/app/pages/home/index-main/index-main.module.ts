import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexMainPageRoutingModule } from './index-main-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { IndexMainPage } from './index-main.page';
import { MatButtonModule } from '@angular/material/button';
import { BottomNavComponent } from 'src/app/components/bottom-nav/bottom-nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexMainPageRoutingModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [IndexMainPage, BottomNavComponent]
})
export class IndexMainPageModule {}
