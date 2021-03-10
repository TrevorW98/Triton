import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentsMainPageRoutingModule } from './documents-main-routing.module';

import { DocumentsMainPage } from './documents-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentsMainPageRoutingModule
  ],
  declarations: [DocumentsMainPage]
})
export class DocumentsMainPageModule {}
