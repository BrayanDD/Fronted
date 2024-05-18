import { Component, OnInit } from '@angular/core';
import { EndPointUnprotectedService } from 'src/app/services/auth/end-point-unprotected.service';
import { UserRegister } from 'src/app/services/auth/userRequest';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss']
})
export class RegisterAdminComponent implements OnInit {
  registerError: string = '';

  constructor(private unprotectedService:EndPointUnprotectedService) { }

  ngOnInit(): void {
  }


  create(register: UserRegister) {
    console.log(register)
    this.unprotectedService.registerAdmin(register as UserRegister).subscribe({
      next: () => {
        console.log("creando")
      },
      error: (errorData) => {
        console.log(errorData)
        this.registerError = errorData;
      },
      complete: () => {
        console.log('registrado');
      }
    });

  }
}
