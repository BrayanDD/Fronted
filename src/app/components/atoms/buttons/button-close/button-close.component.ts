import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button-close',
  templateUrl: './button-close.component.html',
  styleUrls: ['./button-close.component.scss']
})
export class ButtonCloseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  onClick(buttonId: string) {
    this.buttonClicked.emit(buttonId);
  }
}
