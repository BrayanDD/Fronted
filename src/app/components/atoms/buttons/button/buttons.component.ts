import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Input() textBut: string = '';
  @Input() disabled: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  onClick(button: string) {
    this.buttonClicked.emit(button);
  }


}
