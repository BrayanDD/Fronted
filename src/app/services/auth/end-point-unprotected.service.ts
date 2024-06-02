// end-point-unprotected.service.ts
import { Injectable } from '@angular/core';
import { User, UserLogin, UserRegister } from './userRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EndPointUnprotectedService {

  currenUseLoginOn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currutUserData:BehaviorSubject<String> = new BehaviorSubject<String>("");

  constructor(private http: HttpClient) {
    this.currenUseLoginOn=new BehaviorSubject<boolean>(sessionStorage.getItem("token") != null);
    this.currutUserData= new BehaviorSubject<String>(sessionStorage.getItem("token") || "");
  }

  logout():void{
    sessionStorage.removeItem("token");
    this.currenUseLoginOn.next(false);
  }

  login(credentials: UserLogin): Observable<any> {
    return this.http.post<any>(environment.urlHost+'user/login', credentials, {
    }).pipe(
      tap(response => {
        sessionStorage.setItem("token", response.token);
        this.currenUseLoginOn.next(true);
        this.currutUserData.next(response.token);
      }),
      map((response) => response.token),
      catchError(this.handleError)
    );
  }


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

  get userData():Observable<String>{
    return this.currutUserData.asObservable();
  }

  get userLogin(): Observable<boolean>{
    return this.currenUseLoginOn.asObservable();
  }

  get userToken():String{
    return this.currutUserData.value;
  }
}
