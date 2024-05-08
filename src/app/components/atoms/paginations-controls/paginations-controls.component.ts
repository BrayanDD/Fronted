import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginations-controls',
  templateUrl: './paginations-controls.component.html',
  styleUrls: ['./paginations-controls.component.scss']
})
export class PaginationsControlsComponent implements OnInit {

  @Output() pageChange: EventEmitter<any> = new EventEmitter<any>;
  constructor() { }

  ngOnInit(): void {
  }

  pageChanged(event: any){

  }
}
