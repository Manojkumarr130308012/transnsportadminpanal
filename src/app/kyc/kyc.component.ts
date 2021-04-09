import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';

import { User } from '../core/models/user';
import { RequestService } from "../services/request.service";
import { AuthenticationService } from 'src/app/core/service/authentication.service';
@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.sass'],providers: [ToastrService]
})
export class KycComponent implements OnInit {
  showgst:any;
  showpan:any;
  showproduct:any;
  businessinformationform:FormGroup;
  productsinformationform:FormGroup;
  gstForm:FormGroup;
  panform:FormGroup;
  error = '';
  submitted = false;
loginid:any;
s_id:any;
  // public readMode = ReadMode.dataURL;
  // public picked: PickedFile;
  public status: string;
  files: any;
  gstFilestring: string;
  panFilestring: string;
  products:any;
  digital:any;
  verification_type:any;
  url: string;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor( private formBuilder: FormBuilder,private http: HttpClient, private authService: AuthenticationService,private request: RequestService) { 
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

   


  onSubmit(){
    this.submitted = true;
    this.error = '';
    if (this.gstForm.invalid) {
      this.error = 'Please Fill the Valid Information!';
      return;
    } else {

      const edata1 = {
        verification_type:this.verification_type,
        login_id:this.loginid,
        s_id: this.s_id,
        company_name: this.gstForm.controls['namegst'].value,
      no: this.gstForm.controls['numbergst'].value,
        picture: this.gstFilestring,
      };

      let body={ 
        "verification_type": ""+this.verification_type,
      "login_id":""+this.loginid,
      "s_id":""+this.s_id,
      "company_name":""+this.gstForm.controls['namegst'].value,
      "no":""+this.gstForm.controls['numbergst'].value, 
      "picture": this.gstFilestring
    };
   
      // let user=this.http.post("https://b2b.texvalleyb2b.in/api_seller/send_kyc_a.php", body);
      //    console.log("userddd",""+user);
      this.request.send_kyc_a(edata1).subscribe(
        (res: any) => {
          if (res.message == "Your KYC is sucessfully verified. Happy Shopping!!") {
            console.log("",""+res.message);
          } else{
            this.error = ''+res.message;
          }
        },
        error => {
      
        }
      );
    }



  }

  onSubmit1(){
    this.submitted = true;
    this.error = '';
    if (this.panform.invalid) {
      this.error = 'Please Fill the Valid Information!';
      return;
    } else {
console.log("",""+this.panform.controls['numberpan'].value);
console.log("",""+this.panform.controls['namepan'].value);
console.log("",""+this.panFilestring);
    }
  }


  onSubmit2(){
    this.submitted = true;
    this.error = '';
    if (this.businessinformationform.invalid) {
      this.error = 'Please Fill the Valid Information!';
      return;
    } else {
     console.log("",""+this.businessinformationform.controls['accountholdername'].value);
     console.log("",""+this.businessinformationform.controls['bankname'].value);
     console.log("",""+this.businessinformationform.controls['accountno'].value);
     console.log("",""+this.businessinformationform.controls['IFSCCode'].value);
     console.log("",""+this.businessinformationform.controls['EntranceRoad'].value);
     console.log("",""+this.businessinformationform.controls['Souroundings'].value);
     console.log("",""+this.businessinformationform.controls['Front'].value);
     console.log("",""+this.businessinformationform.controls['Back'].value);
     console.log("",""+this.businessinformationform.controls['Inside'].value);
     console.log("",""+this.businessinformationform.controls['Inside1'].value);
     console.log("",""+this.businessinformationform.controls['Inside2'].value);
     console.log("",""+this.businessinformationform.controls['Name'].value);
     console.log("",""+this.businessinformationform.controls['OwnerName'].value);
     console.log("",""+this.businessinformationform.controls['Contactcontact'].value);
     console.log("",""+this.businessinformationform.controls['OperationManager'].value);
     console.log("",""+this.businessinformationform.controls['OperationManagerContactNo'].value);
     console.log("",""+this.businessinformationform.controls['MailingAddress'].value);
     console.log("",""+this.businessinformationform.controls['WarehouseAddress'].value);
  }
  }


  onSubmit3(){
    this.submitted = true;
    this.error = '';
    if (this.productsinformationform.invalid) {
      this.error = 'Please Fill the Valid Information!';
      return;
    } else {
     console.log("",""+this.productsinformationform.controls['Establishmentyear'].value);
     console.log("",""+this.productsinformationform.controls['products'].value);
     console.log("",""+this.productsinformationform.controls['AssociatedBrands'].value);
     console.log("",""+this.productsinformationform.controls['Brands'].value);
     console.log("",""+this.productsinformationform.controls['DealingBrands'].value);
     console.log("",""+this.productsinformationform.controls['howmanydays'].value);
     console.log("",""+this.digital);
     console.log("",""+this.products);
     console.log("",""+this.productsinformationform.controls['PlatformNames'].value);
  }


  }
  //gst image convert to string...

  gstFiles(event) {
    ​this.files = event.target.files;
    ​var reader = new FileReader();
    ​reader.onload = this._handleReaderLoaded.bind(this);
    ​reader.readAsBinaryString(this.files[0]);
​}

​_handleReaderLoaded(readerEvt) {
    ​var binaryString = readerEvt.target.result;
    ​this.gstFilestring = btoa(binaryString);  // Converting binary string data.
}


//pan image convert to string...
  
panFiles(event) {
  ​this.files = event.target.files;
  ​var reader = new FileReader();
  ​reader.onload = this._handleReaderLoaded1.bind(this);
  ​reader.readAsBinaryString(this.files[0]);
​}

​_handleReaderLoaded1(readerEvt) {
  ​var binaryString = readerEvt.target.result;
  ​this.panFilestring = btoa(binaryString);  // Converting binary string data.
}
  showgstview(){
    this.showgst = true;
    this.showpan = false;
    this.verification_type="1";
  }
  showpanview(){
    this.showpan = true;
    this.showgst = false;
    this.verification_type="2";
  }

  digitalyesview()
  {
    this.digital="Yes"
  }
  digitalnoview()
  {
    this.digital="No"
  }

  platformyesview()
  { 
    this.products="Yes"
    this.showproduct=true;
    }
  platformnoview()
  {
    this.products="No"
    this.showproduct=false;
  }

  ngOnInit(): void {
    this.showgst=false;
  this.showpan=false;
this.showproduct=false;
let userdetails=localStorage.getItem('currentUser');

// this.loginid=userdetails.
let user=JSON.parse(userdetails);


console.log("userdetails",""+userdetails);
      this.loginid=user.login_id;
      this.s_id=user.s_id;

  this.gstForm = this.formBuilder.group({
    numbergst: ['', Validators.required],
    namegst: ['', Validators.required],
    gstfile: ['', Validators.required]
  });


  this.panform = this.formBuilder.group({
    numberpan: ['', Validators.required],
    namepan: ['', Validators.required],
    panfile: ['', Validators.required]
  });


  this.businessinformationform = this.formBuilder.group({
    accountholdername: ['', Validators.required],
    bankname: ['', Validators.required],
    accountno: ['', Validators.required],
    IFSCCode: ['', Validators.required],
    EntranceRoad: ['', Validators.required],
    Souroundings: ['', Validators.required],
    Front: ['', Validators.required],
    Back: ['', Validators.required],
    Inside: ['', Validators.required],
    Inside1: ['', Validators.required],
    Inside2: ['', Validators.required],
    Name: ['', Validators.required],
    OwnerName: ['', Validators.required],
    Contactcontact: ['', Validators.required],
    OperationManager: ['', Validators.required],
    OperationManagerContactNo: ['', Validators.required],
    MailingAddress: ['', Validators.required],
    WarehouseAddress: ['', Validators.required]
  });

  this.productsinformationform = this.formBuilder.group({
    Establishmentyear: ['', Validators.required],
    products: ['', Validators.required],
    AssociatedBrands: ['', Validators.required],
    Brands: ['', Validators.required],
    DealingBrands: ['', Validators.required],
    howmanydays: ['', Validators.required],
    PlatformNames: ['', Validators.required]
  });

  }



  }


