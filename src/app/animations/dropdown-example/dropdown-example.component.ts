import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-dropdown-example',
  templateUrl: './dropdown-example.component.html',
  styleUrls: ['./dropdown-example.component.scss'],
  animations: [
    trigger('menuState', [
      state('hide', style({
        top: -500 + 'px'
      })),
      state('show', style({
        top: 235 + 'px'
      })),
      transition('hide <=> show', animate('400ms ease-in-out'))
    ])
  ]
})
export class DropdownExampleComponent implements OnInit {

  menu = 'hide';

  constructor() { }

  ngOnInit() {
  }

  showMenu() {
    this.menu = this.menu === 'hide' ? this.menu = 'show' : 'hide';
  }

}
