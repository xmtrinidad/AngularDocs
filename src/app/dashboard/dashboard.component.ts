import { Component, OnInit } from '@angular/core';
import { docs } from '../app-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  docs = docs;

  constructor() { }

  ngOnInit() {
  }

}
