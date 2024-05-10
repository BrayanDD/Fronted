import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnChanges {

  @Input() message: string = '';
  @Input() class: string = '';

  showAlert: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.handleAlert();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Si hay un cambio en el mensaje, maneja la alerta
    if (this.message) {
      this.handleAlert();
    }
  }

  private handleAlert(): void {

    if (this.message) {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
        this.message = '';
      }, 5000);
    }
  }
}
