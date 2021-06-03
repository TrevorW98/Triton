import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsNotifsPage } from './events-notifs.page';

const routes: Routes = [
  {
    path: '',
    component: EventsNotifsPage
  },  {
    path: 'add-events',
    loadChildren: () => import('./add-events/add-events.module').then( m => m.AddEventsPageModule)
  },

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsNotifsPageRoutingModule {}
