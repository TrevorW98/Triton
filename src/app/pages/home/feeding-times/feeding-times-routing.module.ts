import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedingTimesPage } from './feeding-times.page';

const routes: Routes = [
  {
    path: '',
    component: FeedingTimesPage
  },  {
    path: 'add-feeding',
    loadChildren: () => import('./add-feeding/add-feeding.module').then( m => m.AddFeedingPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedingTimesPageRoutingModule {}
