import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { RegisterPage } from './register.page';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
