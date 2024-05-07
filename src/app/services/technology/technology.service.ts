import { Injectable } from '@angular/core';
import {TechnologyRequest} from "./technologyRequest";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Technology} from "./technology";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  constructor(private  http: HttpClient) { }

  createTechnology(credentials:TechnologyRequest):Observable<any>{
    return this.http.post<any>(environment.urlApi + "technologies",credentials).pipe(
      catchError(this.handlerError)
    )
  }

  getAllTechnology(order: string): Observable<Technology[]> {
    return this.http.get<Technology[]>(`${environment.urlApi}technologies?order=${order}`).pipe(
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
