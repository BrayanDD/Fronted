import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  currentOrder: string = 'asc';
  itemsPage: number = 10;
  @Output() itemsPerPageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() order: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeOrder() {
    this.currentOrder = this.currentOrder === 'asc' ? 'desc' : 'asc';
    this.order.emit(this.currentOrder);
  }

  onItemsPerPageChange(): void {
    this.itemsPerPageChange.emit(this.itemsPage);
  }
}
