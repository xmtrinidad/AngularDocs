import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ItemsResponse {
  results: string[];
}

@Component({
  selector: 'app-simple-observable',
  templateUrl: './simple-observable.component.html',
  styleUrls: ['./simple-observable.component.scss']
})
export class SimpleObservableComponent implements OnInit {
  results: string[];

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  getInfo() {
    // Make the HTTP request
    this.http.get<ItemsResponse>('assets/items.json')
      .subscribe(
        data => {
          // Read the result field from the JSON response
          console.log(data.results);
          this.results = data.results;
        },
        err => {
          console.log('Something went wrong!', err);
        }
      );
  }
}
