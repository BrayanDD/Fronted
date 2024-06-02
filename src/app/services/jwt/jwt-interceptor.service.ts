import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {TechnologyService} from "../technology/technology.service";
import {catchError, Observable, throwError} from "rxjs";
import { EndPointUnprotectedService } from '../auth/end-point-unprotected.service';


@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{
  constructor(private unprotectedService: EndPointUnprotectedService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token:String=this.unprotectedService.userToken;

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
