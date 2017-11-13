import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {TohDashboardComponent} from './toh-dashboard/toh-dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'tour-of-heroes/heroes', component: HeroesComponent },
  { path: 'tour-of-heroes/toh-dashboard', component: TohDashboardComponent },
  { path: 'tour-of-heroes/detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourOfHeroesRoutingModule { }
