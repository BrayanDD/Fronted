import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TechnologyService } from "../../services/technology/technology.service";
import { TechnologyRequest } from "../../services/technology/technologyRequest";
import { DataFormService } from 'src/app/services/formData.service';
import { Technology } from 'src/app/services/technology/technology';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.scss']
})
export class BibliotecaComponent implements OnInit {

  @Input() itemError: string = "";
  @Input() formularioVisible: boolean = false;
  @Input() ventanaFormVisible: boolean = false;
  @Input() ventanaExitosoFormVisible: boolean = false;
  @Input() items: any[] = [];
  @Input() itemCreated: string = '';
  @Input() formItem: string = '';
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


  hideFormOnButtonClick(button: string): void {
    if (button === 'button') {
      this.ventanaFormVisible = true;
      this.formularioVisible = true;
    }
  }

  hideFormOnVentanaClose(): void {
    this.ventanaFormVisible = false;
    this.ventanaExitosoFormVisible = false;
  }

  pageChanged(event: any): void {
    this.page = event;
  }



}
