// end-point-unprotected.service.ts
import { Injectable } from '@angular/core';
import { UserRegister } from './userRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EndPointUnprotectedService {

  constructor(private http: HttpClient) { }

  registerAdmin(credentials: UserRegister): Observable<any> {
    return this.http.post<any>(`${environment.urlApi}registerAdmin`, credentials).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error(error.error.message));
  }
}
