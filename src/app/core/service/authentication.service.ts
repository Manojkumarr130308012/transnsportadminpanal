import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { RequestService } from "../../services/request.service";
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient,private request: RequestService) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http
      .post<any>('https://b2b.texvalleyb2b.in/api_seller/login.php', {
        username,
        password,
      })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          // console.log(JSON.stringify(user));
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }



  loginotpverification(otp: string, mobile_no  : string) {
    return this.http
      .post<any>('https://b2b.texvalleyb2b.in/api_seller/login_otp_verification.php', {
        otp,
        mobile_no,
      })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          // console.log(JSON.stringify(user));
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  

  registerotpverification(otp: string, mobile_no  : string) {
    return this.http
      .post<any>('https://b2b.texvalleyb2b.in/api_seller/seller_otp_verification.php', {
        otp,
        mobile_no,
      })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          // console.log(JSON.stringify(user));
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }



  kycform1(verification_type:string,login_id:string,s_id:string,company_name:string,no:string,picture:string) {
    return this.http
      .post<any>('https://b2b.texvalleyb2b.in/api_seller/send_kyc_a.php', {
        verification_type,
        login_id,s_id,company_name,no,picture
      })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          // console.log(JSON.stringify(user));
          // localStorage.setItem('currentUser', JSON.stringify(user));
         this.currentUserSubject.next(user);
          return user;
        })
      );
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    return of({ success: false });
  }
}
