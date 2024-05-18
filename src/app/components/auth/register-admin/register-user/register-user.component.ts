import { Component, OnInit } from '@angular/core';
import { UserRegister } from 'src/app/services/auth/userRequest';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  create(register: UserRegister){

  }
}
