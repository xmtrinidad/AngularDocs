import { Component, OnInit, Input } from '@angular/core';
import { Resource } from '../../models/resource';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  @Input() resources: Resource[];

  constructor() { }

  ngOnInit() {
  }

}
