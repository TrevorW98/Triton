import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsNotifsPage } from './events-notifs.page';

const routes: Routes = [
  {
    path: '',
    component: EventsNotifsPage
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsNotifsPageRoutingModule {}
