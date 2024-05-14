import { Injectable } from '@angular/core';
import { VersionRequest } from './versionRequest';
import { Version } from './version';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VersionService {


  constructor(private  http: HttpClient) { }

  createVersion(credentials:VersionRequest):Observable<any>{
    return this.http.post<any>(environment.urlApi + "version",credentials).pipe(
      catchError(this.handlerError)
    )
  }

  getAllVersion(order: string): Observable<Version[]> {
    return this.http.get<Version[]>(`${environment.urlApi}version?order=${order}`).pipe(
      catchError(this.handlerError)
    );
  }

  getAllVersionIdBootcamp(order: string , bootcampId: number): Observable<Version[]> {
    return this.http.get<Version[]>(`${environment.urlApi}version?order=${order}&idBootcamp=${bootcampId}`).pipe(
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

