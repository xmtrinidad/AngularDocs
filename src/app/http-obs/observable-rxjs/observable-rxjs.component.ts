import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observable-rxjs',
  templateUrl: './observable-rxjs.component.html',
  styleUrls: ['./observable-rxjs.component.scss']
})
export class ObservableRxjsComponent implements OnInit {
  test: Observable<number>;

  constructor() { }

  ngOnInit() {
    const myNums = Observable.of([1, 2, 3]);
    myNums.subscribe((num) => console.log(num));
  }

}
