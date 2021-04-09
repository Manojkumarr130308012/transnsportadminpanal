import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  url: string;
  endPoint = 'https://tamilrise.herokuapp.com';



  endPoint1 = 'https://transportapibackend.herokuapp.com';



  public adminlogin(credentials) {
    console.log('credentials2',credentials);
    this.url = `${this.endPoint1}/api_seller/login.php`;
    return this.http.post(this.url, credentials);
  }

  public adminotplogin(credentials) {
    console.log('credentials2',credentials);
    this.url = `${this.endPoint1}/api_seller/login_otp.php`;
    return this.http.post(this.url, credentials);
  }
  public adminotploginverify(credentials) {
    console.log('credentials2',credentials);
    this.url = `${this.endPoint1}/api_seller/login_otp_verification.php`;
    return this.http.post(this.url, credentials);
  }

  public loadpincodebyins(credentials) {
    console.log('credentials2',credentials);
    this.url = `${this.endPoint1}/api_seller/get_pincode.php`;
    return this.http.post(this.url, credentials);
  }

  public addseller(credentials) {
    console.log('credentials2',credentials);
    this.url = `${this.endPoint1}/api_seller/seller_signup.php`;
    return this.http.post(this.url, credentials);
  }

  public addsellerotp(credentials) {
    console.log('credentials2',credentials);
    this.url = `${this.endPoint1}/api_seller/seller_otp_verification.php`;
    return this.http.post(this.url, credentials);
  }
  public send_kyc_a(credentials):Observable<any>{
    console.log('credentials2',credentials);
    this.url = `${this.endPoint1}/api_seller/send_kyc_a.php`;
    return this.http.post(this.url, credentials).pipe(
      tap((cr)=>{
        console.log("ttttttttt",cr)
      })
    );
  }
  
  public send_kyc_b(credentials) {
    console.log('credentials2',credentials);
    this.url = `${this.endPoint1}/api_seller/send_kyc_b.php`;
    return this.http.post(this.url, credentials);
  }


  public send_kyc_c(credentials) {
    console.log('credentials2',credentials);
    this.url = `${this.endPoint1}/api_seller/send_kyc_c.php`;
    return this.http.post(this.url, credentials);
  }




  //customer


  public getcustomer() {
    this.url = `${this.endPoint1}/customer/`;
    return this.http.get(this.url);
  }

 
  public addcustomer(newexam: {username: any; phone: any;email: any;password: any;}) {
    this.url = `${this.endPoint1}/customer/add`;
    return this.http.post(this.url, newexam);
  }


  public deletecustomer(id) {
    this.url = `${this.endPoint1}/customer/delete?id=` + id;
    return this.http.delete(this.url);
  }


  public fetchcustomerById(id) {
    this.url = `${this.endPoint1}/customer/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

  public updatecustomer(id, body) {
    this.url = `${this.endPoint1}/customer/update?id=${id}`;
    return this.http.put(this.url, body);
  }


  //user


  public getuser() {
    this.url = `${this.endPoint1}/user/`;
    return this.http.get(this.url);
  }

 
  public adduser(newexam: {username: any; phone: any;email: any;password: any;}) {
    this.url = `${this.endPoint1}/user/add`;
    return this.http.post(this.url, newexam);
  }


  public deleteuser(id) {
    this.url = `${this.endPoint1}/user/delete?id=` + id;
    return this.http.delete(this.url);
  }


  public fetchuserById(id) {
    this.url = `${this.endPoint1}/user/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

  public updateuser(id, body) {
    this.url = `${this.endPoint1}/user/update?id=${id}`;
    return this.http.put(this.url, body);
  }



   //goodstype


   public getgoodstype() {
    this.url = `${this.endPoint1}/goods/`;
    return this.http.get(this.url);
  }

 
  public addgoodstype(newexam: {GoodsName: any;}) {
    this.url = `${this.endPoint1}/goods/add`;
    return this.http.post(this.url, newexam);
  }


  public deletegoodstype(id) {
    this.url = `${this.endPoint1}/goods/delete?id=` + id;
    return this.http.delete(this.url);
  }


  public fetchgoodstypeById(id) {
    this.url = `${this.endPoint1}/goods/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

  public updategoodstype(id, body) {
    this.url = `${this.endPoint1}/goods/update?id=${id}`;
    return this.http.put(this.url, body);
  }


   //vechicle


   public getvechicle() {
    this.url = `${this.endPoint1}/vechicle/`;
    return this.http.get(this.url);
  }

 
  public addvechicle(newexam: {Name: any;VechicleType: any;Min_km: any;Min_price: any;Price_km: any;Waiting_min: any;Capacity: any;Width: any;Height: any;Length: any;}) {
    this.url = `${this.endPoint1}/vechicle/add`;
    return this.http.post(this.url, newexam);
  }


  public deletevechicle(id) {
    this.url = `${this.endPoint1}/vechicle/delete?id=` + id;
    return this.http.delete(this.url);
  }


  public fetchvechicleById(id) {
    this.url = `${this.endPoint1}/vechicle/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

  public updatevechicle(id, body) {
    this.url = `${this.endPoint1}/vechicle/update?id=${id}`;
    return this.http.put(this.url, body);
  }
}
