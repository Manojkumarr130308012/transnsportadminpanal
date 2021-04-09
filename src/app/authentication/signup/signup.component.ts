import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { RequestService } from "../../services/request.service";
import { StorageService } from "../../services/storage.service";
import { AuthService } from "../../services/auth.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../../core/models/user';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass'],
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  otpform: FormGroup;
  submitted = false;
  error = '';
  Areas = [
    { id: '1', value: '641603' },
    { id: '2', value: '641602' },
  ];
  addressdetailbyins: any;
  State: any;
  city: any;
  Area:any;
  password:any;
  termcondition:any;
  email:any;
  error1='';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private request: RequestService,
    private storage: StorageService,
    private router: Router,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private auth: AuthService) {

      this.State="";
      this.city="";
      this.registerForm = this.formBuilder.group({
        fname: ['', Validators.required],
        lname: ['', Validators.required],
        email: [
          '',
          [Validators.required, Validators.email, Validators.minLength(5)],
        ],
        Mobile: ['', [Validators.required,Validators.max(10)],],
        Pincode: ['',Validators.required],
        State: [ ''+this.State,Validators.required],
        Area: [ '',[Validators.required]],
        City: [ ''+this.city,Validators.required],
        password: ['', Validators.required],
      });

      this.currentUserSubject = new BehaviorSubject<User>(
        JSON.parse(localStorage.getItem('currentUser'))
      );
      this.currentUser = this.currentUserSubject.asObservable();

    }
    public get currentUserValue(): User {
      return this.currentUserSubject.value;
    }
  
  ngOnInit() {
    this.otpform = this.fb.group({
   
      otp: ['', [Validators.required]],

    });
  }
  get f() {
    return this.registerForm.controls;
  }
  onSubmit(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
    this.submitted = true;
    this.error = '';

    if (this.registerForm.invalid) {
      this.error = 'Invalid data !';
      return;
    } else {


           let seller={
             name:""+this.registerForm.controls['fname'].value,
             company_name:""+this.registerForm.controls['lname'].value,
             mobile_no:""+this.registerForm.controls['Mobile'].value,
             email_id:""+this.registerForm.controls['email'].value,
             city:""+this.registerForm.controls['City'].value,
             area:""+this.registerForm.controls['Area'].value,
             state:""+this.registerForm.controls['State'].value,
             pincode:""+this.registerForm.controls['Pincode'].value,
             password:""+this.registerForm.controls['password'].value,
           }

      this.request.addseller(seller).subscribe(
        (res: any) => {
          if (res.registration_status == "1") {
            console.log("registerForm",""+res.status);
          } else if (res.status == "0") {
           
          }
        },
        error => {
         
        }
      );
      
      
    }

    
  }
  onAddRowSave(form: FormGroup) {

    let seller={
      otp:""+this.otpform.controls['otp'].value,
      mobile_no :""+this.registerForm.controls['Mobile'].value,
    }




    this.authService
    .registerotpverification(this.otpform.controls['otp'].value,this.registerForm.controls['Mobile'].value)
    .subscribe(
      (res) => {
        if (res) {
          if (res.message == "Incorrect OTP!!Please Try Again!!!!") {
            console.log("something went wrong");
            this.error1 = 'Incorrect OTP!!Please Try Again!!!!';
            return;
          }
          if (res.login_status == "0") {   
            this.error1 = 'Incorrect OTP!!Please Try Again!!!!';
          }
          if (res.login_status == "1") {
                 this.modalService.dismissAll();
            this.router.navigate(['/dashboard/main']);
       
          }
        } else {
          this.error1 = 'Invalid Login';
        }
      },
      (error1) => {
        this.error1 = error1;
        this.submitted = false;
      }
    );




    // this.request.addsellerotp(seller).subscribe(
    //   (res: any) => {
    //     if (res.login_status == "1") {
    //       console.log("registerForm",""+res.login_status);
    //       localStorage.setItem('currentUser', JSON.stringify(res));
    //       this.currentUserSubject.next(res);
    //       this.modalService.dismissAll();
    //       this.router.navigate(['/dashboard/main']);
    //     } else if (res.login_status == "0") {
         
    //     }
    //   },
    //   error => {
       
    //   }
    // );
    
  }
  onpincodeChange(pincode: string,form: FormGroup) {
    console.log('pincode', pincode);
    let body={ "pincode": ""+pincode};
    if (pincode) {
       this.request.loadpincodebyins(body).subscribe((response: any) => {
         console.log(response);
         this.addressdetailbyins = response;
         this.State=this.addressdetailbyins.state;
         this.city=this.addressdetailbyins.city;


         this.registerForm = this.formBuilder.group({
          fname: [''+this.registerForm.controls['fname'].value, Validators.required],
          lname: [''+this.registerForm.controls['lname'].value, Validators.required],
          email: [
            ''+this.registerForm.controls['email'].value,
            [Validators.required, Validators.email, Validators.minLength(5)],
          ],
          Mobile: [''+this.registerForm.controls['Mobile'].value, Validators.required],
          Pincode: [''+pincode,Validators.required],
          State: [ ''+this.State,Validators.required],
          Area: [ '',[Validators.required]],
          City: [ ''+this.city,Validators.required],
          password: [''+this.registerForm.controls['password'].value, Validators.required],
        });
         console.log('addressdetailbyins', this.addressdetailbyins);
       }, (error) => {
         console.log(error);
       });

     } else

       this.addressdetailbyins = null;
    }
}
