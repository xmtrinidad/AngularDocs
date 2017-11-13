import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './models/item';


@Component({
  selector: 'app-traversy-media',
  templateUrl: './traversy-media.component.html',
  styleUrls: ['./traversy-media.component.scss']
})
export class TraversyMediaComponent implements OnInit {
  items: Item[];
  item: Item = {
    title: '',
    description: ''
  };

  editState = false;
  itemToEdit: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  onSubmit() {
    if (this.item.title !== '' && this.item.description !== '') {
      this.itemService.addItem(this.item);
      this.item.title = '';
      this.item.description = '';
    }
  }

  deleteItem(e, item) {
    this.clearState();
    this.itemService.deleteItem(item);
  }

  editItem(e, item) {
    e.preventDefault();
    this.editState = true;
    this.itemToEdit = item;
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }

  updateItem(e, item: Item) {
    this.itemService.updateItem(item);
    this.clearState();
  }

}


