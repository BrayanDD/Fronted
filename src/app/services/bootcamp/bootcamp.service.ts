import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BootcampRequest } from './bootcampRequest';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bootcamp } from './bootcamp';

@Injectable({
  providedIn: 'root'
})
export class BootcampService {

  constructor(private  http: HttpClient) { }

  createBootcamp(credentials:BootcampRequest):Observable<any>{
    return this.http.post<any>(environment.urlApi + "bootcamps",credentials).pipe(
      catchError(this.handlerError)
    )
  }

  getAllBootcamp(order: string): Observable<Bootcamp[]> {
    return this.http.get<Bootcamp[]>(`${environment.urlApi}bootcamps?order=${order}`).pipe(
      catchError(this.handlerError)
    );
  }


  private handlerError(error:HttpErrorResponse){
    if (error.status===0){
      console.error('Se ha producido un error', error.error);
    }else{
      console.error('El Backen retorno el codigo de estado',error.status,error.error);
    }
    return throwError(()=> new Error(error.error.message));
  }

}
