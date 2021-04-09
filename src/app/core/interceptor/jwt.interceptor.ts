import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthService) {}
  loginid:any;
  s_id:any;
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let currentUser = this.authenticationService.currentUserValue;

    let userdetails=localStorage.getItem('currentUser');

// this.loginid=userdetails.
let user=JSON.parse(userdetails);




// console.log("userdetails",""+user.token);
      // this.loginid=user.username;
      // this.s_id=user.token;
      // console.log("loginid",""+this.loginid);
      // console.log("s_id",""+this.s_id);


    if (currentUser && user.token) {
      request = request.clone({
        setHeaders: {
            Authorization: `${user.token}`,
        },
      });
    }
    // console.log("currentUser",""+currentUser.username);
    return next.handle(request);
  }
}
