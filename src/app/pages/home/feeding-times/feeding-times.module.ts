import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedingTimesPageRoutingModule } from './feeding-times-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { FeedingTimesPage } from './feeding-times.page';
import { MatButtonModule } from '@angular/material/button';
import { BottomNavComponent } from 'src/app/components/bottom-nav/bottom-nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedingTimesPageRoutingModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    FeedingTimesPage,
    BottomNavComponent,]
})
export class FeedingTimesPageModule {}
