import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tex-area',
  templateUrl: './tex-area.component.html',
  styleUrls: ['./tex-area.component.scss']
})
export class TexAreaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() labelText: string = '';
  @Input() control?: FormControl;
}
