import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];

  constructor(public itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      console.log(items);
    });
  }
}
