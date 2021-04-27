import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';

import { ChangeEmailPageRoutingModule } from './change-email-routing.module';

import { ChangeEmailPage } from './change-email.page';
import { MatButtonModule } from '@angular/material/button';
import { BottomNavComponent } from 'src/app/components/bottom-nav/bottom-nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeEmailPageRoutingModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [ChangeEmailPage, BottomNavComponent],
})
export class ChangeEmailPageModule {}
