import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsNotifsPageRoutingModule } from './events-notifs-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { EventsNotifsPage } from './events-notifs.page';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsNotifsPageRoutingModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [EventsNotifsPage]
})
export class EventsNotifsPageModule {}
