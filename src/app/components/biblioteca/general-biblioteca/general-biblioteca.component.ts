
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-general-biblioteca',
  templateUrl: './general-biblioteca.component.html',
  styleUrls: ['./general-biblioteca.component.scss']
})
export class GeneralBibliotecaComponent implements OnInit {

  @Input() itemError: string = "";
  @Input() formularioVisible: boolean = false;
  @Input() ventanaFormVisible: boolean = false;
  @Input() ventanaExitosoFormVisible: boolean = false;
  @Input() items: any[] = [];
  @Input() itemCreated: string = '';
  @Input() formItem: string = '';
  @Input() itemsForSelect: any[] = [];
  @Input() messageToCreate: string = '';
  @Input() textButton: string = '';
  @Input() urlButton: string = '';
  page: number = 1;

  itemsPage: number = 10;
  currentOrder: string = '';
  @Output() orderChange: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {


  }

  onItemsPerPageChange(event: number): void {
    this.itemsPage = event;
  }

  loadItems(order: string) {
    this.currentOrder = order;
    this.orderChange.emit(this.currentOrder);
  }


  showFormOnButtonClick(): void {

      this.ventanaFormVisible = true;
      this.formularioVisible = true;

  }

  hideFormOnVentanaClose(): void {
    this.ventanaFormVisible = false;
    this.ventanaExitosoFormVisible = false;
  }

  pageChanged(event: any): void {
    this.page = event;
  }



}
