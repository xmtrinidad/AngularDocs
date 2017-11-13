import { Component, OnInit, Input } from '@angular/core';
import { Example } from '../../models/example';

@Component({
  selector: 'app-example-card-info',
  templateUrl: './example-card-info.component.html',
  styleUrls: ['./example-card-info.component.scss']
})
export class ExampleCardInfoComponent implements OnInit {
  @Input() examples: Example[];

  constructor() { }

  ngOnInit() {
  }

}
