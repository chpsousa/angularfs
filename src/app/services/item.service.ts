import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable } from 'rxjs';

import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  
  constructor(public afs: AngularFirestore) { 
    this.items = this.afs.collection('items').valueChanges();
  }

  getItems() {
    return this.items;
  }
}
