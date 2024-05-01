import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  //Cuando el usuario es estudiante el nav no le debe de aparecer
  userRoleStudent:boolean=false;
  //

  constructor() { }

  ngOnInit(): void {
  }

}
