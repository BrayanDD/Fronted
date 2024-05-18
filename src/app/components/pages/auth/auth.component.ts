import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserRegister, UserLogin } from 'src/app/services/auth/userRequest';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  @Input() formLogin:boolean = false;
  @Output() registerEvent = new EventEmitter<UserRegister>();
  @Output() loginEvent = new EventEmitter<any>();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  registerForm = this.formBuilder.group({
    name:['',[Validators.required]],
    lastName:['',[Validators.required]],
    docIdent:['',[Validators.required]],
    cellPhone:['',[Validators.required]],
    email:['',[Validators.required]],
    password:['',[Validators.required]]
  })

  loginForm = this.formBuilder.group({
    email:['',[Validators.required]],
    password:['',[Validators.required]]

  })

  onRegisterSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.registerEvent.emit(this.registerForm.value as UserRegister);
    }else{
      console.log('invalido')
      this.registerForm.markAllAsTouched();
    }
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      this.loginEvent.emit(this.loginForm.value as UserLogin);
    }else{
      this.loginForm.markAllAsTouched();
    }
  }
}
