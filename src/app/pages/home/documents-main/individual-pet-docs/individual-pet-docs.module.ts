import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {MatIconModule} from '@angular/material/icon';
import { IndividualPetDocsPageRoutingModule } from './individual-pet-docs-routing.module';

import { IndividualPetDocsPage } from './individual-pet-docs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndividualPetDocsPageRoutingModule,
    MatIconModule
  ],
  declarations: [IndividualPetDocsPage]
})
export class IndividualPetDocsPageModule {}
