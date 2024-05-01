import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {TechnologyService} from "../technology/technology.service";
import {catchError, Observable, throwError} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{
  constructor(private technologyService: TechnologyService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token: String = "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsInN1YiI6InBydWViYUBnbWFpbC5jb20iLCJpYXQiOjE3MTQzMTM3NjAsImV4cCI6MTcxNDMyMzg0MH0.y1DfKBwXjm0rklGZRUz8Fn4f8H07BiAwEthm_CMFr_k";

    if(token!=""){
      req = req.clone({
        setHeaders:{
          'Authorization': `Bearer ${token}`
        }
      }
      )
    }
    return next.handle(req).pipe(
      catchError(error => {
        console.log(error);
        return throwError(()=> error);
      })
    );
  }


}
