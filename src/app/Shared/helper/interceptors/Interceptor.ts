import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class Interceptor implements HttpInterceptor {

   constructor() { }

   intercept(request: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {

      // Add Authorization header with the Jwt to all request if it is available
      const token = localStorage.getItem('token');

      if (token) {
         request = request.clone({
            setHeaders: {
               Authorization: 'Bearer ' + token
            }
         });
      }

      // Handle the request and move into next interceptors if available
      return handler.handle(request);

   }
}
