import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedingTimesPageRoutingModule } from './feeding-times-routing.module';

import { FeedingTimesPage } from './feeding-times.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedingTimesPageRoutingModule
  ],
  declarations: [FeedingTimesPage]
})
export class FeedingTimesPageModule {}
