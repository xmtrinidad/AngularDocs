import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TourOfHeroesComponent } from './tour-of-heroes/tour-of-heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AnimationsComponent} from './animations/animations.component';
import {FormsComponent} from './forms/forms.component';
import {HttpObsComponent} from './http-obs/http-obs.component';
import {FirestoreComponent} from './firestore/firestore.component';
import {DirectivesComponent} from './directives/directives.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  {
    path: 'tour-of-heroes',
    component: TourOfHeroesComponent,
  },

  { path: 'dashboard', component: DashboardComponent},
  { path: 'animations', component: AnimationsComponent},
  { path: 'directives', component: DirectivesComponent},
  { path: 'forms', component: FormsComponent},
  { path: 'http-obs', component: HttpObsComponent},
  { path: 'firestore', component: FirestoreComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

