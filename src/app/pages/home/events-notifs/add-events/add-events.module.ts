import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEventsPageRoutingModule } from './add-events-routing.module';
// import { EventsNotifsPageRoutingModule } from './events-notifs-routing.module';
import {MatIconModule} from '@angular/material/icon';
// import { EventsNotifsPage } from './events-notifs.page';
import {MatButtonModule} from '@angular/material/button';
import { BottomNavComponent } from 'src/app/components/bottom-nav/bottom-nav.component';
import { TopNavComponent } from 'src/app/components/top-nav/top-nav.component';
import { AddEventsPage } from './add-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEventsPageRoutingModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  declarations: [AddEventsPage, BottomNavComponent, TopNavComponent]
})
export class AddEventsPageModule {}
