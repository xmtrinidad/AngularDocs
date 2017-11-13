import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SimpleObservableComponent} from './simple-observable/simple-observable.component';

const routes: Routes = [
  { path: 'http-obs/simple-observable', component: SimpleObservableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpObsRoutingModule { }
