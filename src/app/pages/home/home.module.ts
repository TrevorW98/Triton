import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { MatSliderModule } from '@angular/material/slider';
import { HomePageRoutingModule } from './home-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import './home.page.scss'
import {MatButtonModule} from '@angular/material/button';
import { BottomNavComponent } from '../../components/bottom-nav/bottom-nav.component';
import { TopNavComponent } from 'src/app/components/top-nav/top-nav.component';
import { EventComponent } from './home-components/event/event.component';
import { FeedComponent } from './home-components/feed/feed.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    
  ],
  declarations: [
    HomePage,
    BottomNavComponent,
    TopNavComponent,
    EventComponent,
    FeedComponent
  ]
})
export class HomePageModule {}
