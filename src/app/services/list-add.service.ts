import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListAddService {

  private selectedItems: any[] = [];
  private idItems: number[] = [];

  private _items:BehaviorSubject<any[]>;
  constructor() {
    this._items = new BehaviorSubject<any[]>([]);
   }

   get item(){
    return this._items.asObservable();
   }

   idItemsAdd(){
    return this.idItems;
   }
   addNewItem(item: any){
    this.selectedItems.push(item);
    if ('id' in item) {
      this.idItems.push(item.id);
    }
    this._items.next(this.selectedItems);
   }

   deleteItem(index: number){
    this.selectedItems.splice(index,1);
    this._items.next(this.selectedItems);
    this.idItems.splice(index,1);
   }
}
