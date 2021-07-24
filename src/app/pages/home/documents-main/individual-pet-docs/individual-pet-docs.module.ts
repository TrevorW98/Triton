import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';
import {MatIconModule} from '@angular/material/icon';
import { IndividualPetDocsPageRoutingModule } from './individual-pet-docs-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndividualPetDocsPage } from './individual-pet-docs.page';
import { MatButtonModule } from '@angular/material/button';
import { BottomNavComponent } from 'src/app/components/bottom-nav/bottom-nav.component';
import { TopNavComponent } from 'src/app/components/top-nav/top-nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndividualPetDocsPageRoutingModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  declarations: [IndividualPetDocsPage, BottomNavComponent, TopNavComponent]
})
export class IndividualPetDocsPageModule {}
