import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-my-basic-example',
  templateUrl: './my-basic-example.component.html',
  styleUrls: ['./my-basic-example.component.scss'],
  animations: [
    trigger('cardState', [
      state('inactive', style({
        opacity: 0
      })),
      state('active', style({
        opacity: 1
      })),
      transition('inactive <=> active', animate('300ms ease-in-out'))
    ])
  ]
})
export class MyBasicExampleComponent implements OnInit {

  cardActive = 'inactive';


  constructor() { }

  ngOnInit() {

  }

  click() {
    this.cardActive = this.cardActive === 'inactive' ? 'active' : 'inactive';
  }

}
