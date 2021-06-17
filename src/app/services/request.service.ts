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



  endPoint1 = 'https://herbocare.herokuapp.com';



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




//users


public getusers() {
  this.url = `${this.endPoint1}/userss/`;
  return this.http.get(this.url);
}


public addusers(newexam: {Name: any; Mobile: any;Email: any;Code: any;Designation: any;Branch:any;Gender:any;Status:any;Address:any;Fathername:any;Fathermobile:any;Basicpay:any;Bankdetails:any;Remarks1:any}) {
  this.url = `${this.endPoint1}/userss/add`;
  return this.http.post(this.url, newexam);
}


public deleteusers(id) {
  this.url = `${this.endPoint1}/userss/delete?id=` + id;
  return this.http.delete(this.url);
}


public fetchusersById(id) {
  this.url = `${this.endPoint1}/userss/fetchdata?id=` + id;
  return this.http.get(this.url);
}

public updateusers(id, body) {
  this.url = `${this.endPoint1}/userss/update?id=${id}`;
  return this.http.put(this.url, body);
}




 //designation


 public getdesignation() {
  this.url = `${this.endPoint1}/designation/`;
  return this.http.get(this.url);
}


public adddesignation(newexam: {designation: any;}) {
  this.url = `${this.endPoint1}/designation/add`;
  return this.http.post(this.url, newexam);
}


public deletedesignation(id) {
  this.url = `${this.endPoint1}/designation/delete?id=` + id;
  return this.http.delete(this.url);
}


public fetchdesignationById(id) {
  this.url = `${this.endPoint1}/designation/fetchdata?id=` + id;
  return this.http.get(this.url);
}

public updatedesignation(id, body) {
  this.url = `${this.endPoint1}/designation/update?id=${id}`;
  return this.http.put(this.url, body);
}

 //Speciality


 public getSpeciality() {
  this.url = `${this.endPoint1}/Speciality/`;
  return this.http.get(this.url);
}


public addSpeciality(newexam: {Speciality: any;}) {
  this.url = `${this.endPoint1}/Speciality/add`;
  return this.http.post(this.url, newexam);
}


public deleteSpeciality(id) {
  this.url = `${this.endPoint1}/Speciality/delete?id=` + id;
  return this.http.delete(this.url);
}


public fetchSpecialityById(id) {
  this.url = `${this.endPoint1}/Speciality/fetchdata?id=` + id;
  return this.http.get(this.url);
}

public updateSpeciality(id, body) {
  this.url = `${this.endPoint1}/Speciality/update?id=${id}`;
  return this.http.put(this.url, body);
}


//department


public getdepartment() {
  this.url = `${this.endPoint1}/department/`;
  return this.http.get(this.url);
}


public adddepartment(newexam: {Department: any;}) {
  this.url = `${this.endPoint1}/department/add`;
  return this.http.post(this.url, newexam);
}


public deletedepartment(id) {
  this.url = `${this.endPoint1}/department/delete?id=` + id;
  return this.http.delete(this.url);
}


public fetchdepartmentById(id) {
  this.url = `${this.endPoint1}/department/fetchdata?id=` + id;
  return this.http.get(this.url);
}

public updatedepartment(id, body) {
  this.url = `${this.endPoint1}/department/update?id=${id}`;
  return this.http.put(this.url, body);
}
   //branch


   public getbranch() {
    this.url = `${this.endPoint1}/branch/`;
    return this.http.get(this.url);
  }

 
  public addbranch(newexam: {username: any; phone: any;email: any;password: any;}) {
    this.url = `${this.endPoint1}/branch/add`;
    return this.http.post(this.url, newexam);
  }


  public deletebranch(id) {
    this.url = `${this.endPoint1}/branch/delete?id=` + id;
    return this.http.delete(this.url);
  }


  public fetchbranchById(id) {
    this.url = `${this.endPoint1}/branch/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

  public updatebranch(id, body) {
    this.url = `${this.endPoint1}/branch/update?id=${id}`;
    return this.http.put(this.url, body);
  }
  //state


  public getstate() {
    this.url = `${this.endPoint1}/states/`;
    return this.http.get(this.url);
  }

 
  public addstate(newexam: {StateName: any; StateCode: any;}) {
    this.url = `${this.endPoint1}/states/add`;
    return this.http.post(this.url, newexam);
  }


  public deletestate(id) {
    this.url = `${this.endPoint1}/states/delete?id=` + id;
    return this.http.delete(this.url);
  }


  public fetchstateById(id) {
    this.url = `${this.endPoint1}/states/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

  public updatestate(id, body) {
    this.url = `${this.endPoint1}/states/update?id=${id}`;
    return this.http.put(this.url, body);
  }

//state


public getcompany() {
  this.url = `${this.endPoint1}/company/`;
  return this.http.get(this.url);
}


public addcompany(newexam: {CompanyName: any; CompanyCode: any;Address: any;City: any;Country: any;State: any;Pincode: any;MobileNo: any;PhoneNo: any;Email: any;Website: any;GST: any;Logo: any;Terms: any;}) {
  this.url = `${this.endPoint1}/company/add`;
  return this.http.post(this.url, newexam);
}


public deletecompany(id) {
  this.url = `${this.endPoint1}/company/delete?id=` + id;
  return this.http.delete(this.url);
}


public fetchcompanyById(id) {
  this.url = `${this.endPoint1}/company/fetchdata?id=` + id;
  return this.http.get(this.url);
}

public updatecompany(id, body) {
  this.url = `${this.endPoint1}/company/update?id=${id}`;
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
