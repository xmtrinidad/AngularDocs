import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { HttpObsRoutingModule } from './http-obs-routing.module';

import { SimpleObservableComponent } from './simple-observable/simple-observable.component';
import { ObservableRxjsComponent } from './observable-rxjs/observable-rxjs.component';


@NgModule({
  declarations: [SimpleObservableComponent, ObservableRxjsComponent],
  imports: [CommonModule, HttpClientModule, HttpObsRoutingModule],
  exports: [SimpleObservableComponent, ObservableRxjsComponent],
  providers: []
})
export class HttpObsModule { }
