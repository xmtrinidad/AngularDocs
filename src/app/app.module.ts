import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { TourOfHeroesModule } from './tour-of-heroes/tour-of-heroes.module';
import { AnimationsModule } from './animations/animations.module';
import { HttpObsModule } from './http-obs/http-obs.module';
import { FirestoreModule } from './firestore/firestore.module';


import { AppComponent } from './app.component';
import { TourOfHeroesComponent } from './tour-of-heroes/tour-of-heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnimationsComponent } from './animations/animations.component';
import { FormsComponent } from './forms/forms.component';
import { HttpObsComponent } from './http-obs/http-obs.component';
import { ResourcesComponent } from './dashboard/resources/resources.component';
import { FirestoreComponent } from './firestore/firestore.component';
import { ExampleCardInfoComponent } from './dashboard/example-card-info/example-card-info.component';
import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    TourOfHeroesComponent,
    DashboardComponent,
    AnimationsComponent,
    FormsComponent,
    HttpObsComponent,
    ResourcesComponent,
    FirestoreComponent,
    ExampleCardInfoComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TourOfHeroesModule,
    AnimationsModule,
    HttpObsModule,
    FirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
