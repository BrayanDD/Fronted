import { Component, OnInit } from '@angular/core';
import { EndPointUnprotectedService } from 'src/app/services/auth/end-point-unprotected.service';
import { UserLogin } from 'src/app/services/auth/userRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logintError: string= '';

  constructor(private unprotectedService: EndPointUnprotectedService) { }

  ngOnInit(): void {
  }

  login(login: UserLogin) {
    console.log(login)
    this.unprotectedService.login(login as UserLogin).subscribe({
      next: () => {
        console.log("creando")
      },
      error: (errorData) => {
        console.log(errorData)
        this.logintError = errorData;
      },
      complete: () => {
        console.log('registrado');
      }
    });

  }
}
