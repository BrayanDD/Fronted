import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-created-emergente',
  templateUrl: './created-emergente.component.html',
  styleUrls: ['./created-emergente.component.scss']
})
export class CreatedEmergenteComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  @Output() closed: EventEmitter<void> = new EventEmitter<void>();


  hideVentanaOnButtonClick(buttonId: string) {
    if (buttonId === 'botonCerrar') {

      this.closed.emit();
    }
  }
}
