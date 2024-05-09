import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CapacityRequest } from './capacityRequest';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Capacity } from './capacity';

@Injectable({
  providedIn: 'root'
})
export class CapacityService {

  constructor(private  http: HttpClient) { }

  createCapacity(credentials:CapacityRequest):Observable<any>{
    return this.http.post<any>(environment.urlApi + "capabilities",credentials).pipe(
      catchError(this.handlerError)
    )
  }

  getAllCapacity(order: string): Observable<Capacity[]> {
    return this.http.get<Capacity[]>(`${environment.urlApi}capabilities?order=${order}`).pipe(
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
