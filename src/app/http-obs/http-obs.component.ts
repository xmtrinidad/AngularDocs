import { Component, OnInit } from '@angular/core';
import {Example, Resource} from '../app-data';

@Component({
  selector: 'app-http-obs',
  templateUrl: './http-obs.component.html',
  styleUrls: ['./http-obs.component.scss']
})
export class HttpObsComponent implements OnInit {
  resources: Resource[] = [
    {
      title: 'Overview of RxJS',
      link: 'https://www.youtube.com/watch?v=T9wOu11uU6U'
    },
    {
      title: 'Traversy Media RxJS Observables',
      link: 'https://www.youtube.com/watch?v=ei7FsoXKPl0&t'
    },
    {
      title: 'Observables, Observers & Subscriptions',
      link: 'https://www.youtube.com/watch?v=Tux1nhBPl_w'
    },
    {
      title: 'HTTP & Observables -- Angular 2',
      link: 'https://www.youtube.com/watch?v=mSV0AihITxo'
    },
    {
      title: 'HttpClient -- Angular.io',
      link: 'https://angular.io/guide/http'
    }
  ];

  examples: Example[] = [
    {
      description: 'Simple Observable Example',
      skills: [
        'HttpClient & Get',
        'subscribe()',
      ],
      link: '/http-obs/simple-observable'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
