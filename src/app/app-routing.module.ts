import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackComponent } from './track/track.component';
import { HomeComponent } from './home/home.component';
import { PlayListComponent } from './play-list/play-list.component';


const routes: Routes = [
  {
    path : '',
    component:HomeComponent
  },
  {
    path : 'track',
    component:TrackComponent
  },
  {
    path : 'track/:searchString',
    component:TrackComponent
  },
  {
    path:'playList',
    component:PlayListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
