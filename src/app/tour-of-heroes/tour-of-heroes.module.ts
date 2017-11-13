import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TourOfHeroesRoutingModule } from './tour-of-heroes-routing.module';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { TohDashboardComponent } from './toh-dashboard/toh-dashboard.component';

import {HeroService} from './hero.service';
import { MessageService } from './message.service';


@NgModule({
  imports: [
    CommonModule,
    TourOfHeroesRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    TohDashboardComponent
  ],
  providers: [HeroService, MessageService],
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    TohDashboardComponent
  ]
})
export class TourOfHeroesModule { }
