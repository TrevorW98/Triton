import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {MatIconModule} from '@angular/material/icon';
import { DocumentsMainPageRoutingModule } from './documents-main-routing.module';
import {MatButtonModule} from '@angular/material/button';
import { DocumentsMainPage } from './documents-main.page';
import { BottomNavComponent } from 'src/app/components/bottom-nav/bottom-nav.component';
import { TopNavComponent } from 'src/app/components/top-nav/top-nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentsMainPageRoutingModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [DocumentsMainPage, BottomNavComponent, TopNavComponent]
})
export class DocumentsMainPageModule {}
