import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AddFeedingPageRoutingModule } from './add-feeding-routing.module';
import { AddFeedingPage } from './add-feeding.page';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BottomNavComponent } from 'src/app/components/bottom-nav/bottom-nav.component';
import { TopNavComponent } from 'src/app/components/top-nav/top-nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFeedingPageRoutingModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [AddFeedingPage, BottomNavComponent, TopNavComponent]
})
export class AddFeedingPageModule {}