import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  onClick(button: string) {
    this.buttonClicked.emit(button);
  }

  @Input() textBut: string = '';

}
