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
import { LocationServiceService } from "../services/location-service.service";
import { AuthenticationService } from 'src/app/core/service/authentication.service';
// import { FilePickerDirective, PickedFile, ReadMode } from '../lib';
@Component({
  selector: 'app-kycdetails',
  templateUrl: './kycdetails.component.html',
  styleUrls: ['./kycdetails.component.sass'],
  providers: [ToastrService]
})
export class KycdetailsComponent implements OnInit {
  showgst:any;
  showpan:any;
  showproduct:any;
  businessinformationform:FormGroup;
  productsinformationform:FormGroup;
  gstForm:FormGroup;
  panform:FormGroup;
  error = '';
  error1 = '';
  error2 = '';
  sucess='';
  sucess1='';

  sucess2='';

  submitted = false;
  submitted1= false;
  submitted2= false;

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
  logi:any;
  loti:any;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  frontimagestring: string;
  backimagestring: string;
  insideimagestring: string;
  inside1imagestring: string;
  inside2imagestring: string;
  nameimagestring: string;
  constructor( private formBuilder: FormBuilder,private http: HttpClient,private locationService:LocationServiceService, private authService: AuthenticationService,private request: RequestService) { 
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

   


  onSubmit(){
    this.submitted = true;
    this.error = '';
    this.sucess='';
    if (this.gstForm.invalid) {
      this.error = 'Please Fill the Valid Information!';
      return;
    } else {

   
      let body={ 
        "verification_type": ""+this.verification_type,
      "login_id":""+this.loginid,
      "s_id":""+this.s_id,
      "company_name":""+this.gstForm.controls['namegst'].value,
      "no":""+this.gstForm.controls['numbergst'].value, 
      "picture": this.gstFilestring
    };



      this.request.send_kyc_a(body).subscribe(
        (res: any) => {
          if (res.status == "1") {
            console.log("",""+res.message);
            this.sucess=res.message;
          }
         else
          {
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
    this.sucess='';
    if (this.panform.invalid) {
      this.error = 'Please Fill the Valid Information!';
      return;
    } else {
console.log("",""+this.panform.controls['numberpan'].value);
console.log("",""+this.panform.controls['namepan'].value);
console.log("",""+this.panFilestring);

let body={ 
  "verification_type": ""+this.verification_type,
"login_id":""+this.loginid,
"s_id":""+this.s_id,
"company_name":""+this.panform.controls['namepan'].value,
"no":""+this.panform.controls['numberpan'].value, 
"picture": this.gstFilestring
};


this.request.send_kyc_a(body).subscribe(
  (res: any) => {
    if (res.status == "1") {
      console.log("",""+res.message);
      this.sucess=res.message;
    }
   else
    {
      this.error = ''+res.message;
    }
  },
  error => {
  }
);

    }
  }


  onSubmit2(){
    this.submitted1 = true;
    this.error1 = '';
    if (this.businessinformationform.invalid) {
      this.error1 = 'Please Fill the Valid Information!';
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

     let body={ 
      "login_id": ""+this.loginid,
    "s_id":""+this.s_id,
    "account_name":""+this.businessinformationform.controls['accountholdername'].value,
    "bank_name":""+this.businessinformationform.controls['bankname'].value,
    "account_no":""+this.businessinformationform.controls['accountno'].value, 
    "ifsc_code":this.businessinformationform.controls['IFSCCode'].value,
    "factory1": this.frontimagestring,
    "factory2": this.backimagestring,
    "factory3": this.insideimagestring,
    "factory4": this.inside1imagestring,
    "factory5": this.inside2imagestring,
    "name_board": ​this.nameimagestring,
    "entrance_road": this.businessinformationform.controls['EntranceRoad'].value,
    "surrounding": this.businessinformationform.controls['Souroundings'].value,
    "owner_name": this.businessinformationform.controls['OwnerName'].value,
    "owner_contact_no": this.businessinformationform.controls['Contactcontact'].value,
    "operations_manager_name": this.businessinformationform.controls['OperationManager'].value,
    "operations_manager_contact_no": this.businessinformationform.controls['OperationManagerContactNo'].value,
    "mailing_address": this.businessinformationform.controls['MailingAddress'].value,
    "warehouse_address": this.businessinformationform.controls['WarehouseAddress'].value
    };

     this.request.send_kyc_b(body).subscribe(
      (res: any) => {
        if (res.status == "1") {
          console.log("",""+res.message);
          this.sucess1=res.message;
        }
       else
        {
          this.error1 = ''+res.message;
        }
      },
      error1 => {
      }
    );


  }
  }


  onSubmit3(){
    this.submitted2 = true;
    this.error2 = '';
    if (this.productsinformationform.invalid) {
      this.error2 = 'Please Fill the Valid Information!';
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

     let loc=this.locationService.getPosition().then(pos=>
      {
         console.log(`Positon: ${pos.lng} ${pos.lat}`);

this.logi=pos.lng;
this.loti=pos.lat;

      });

     let body={ 
      "login_id": ""+this.loginid,
    "s_id":""+this.s_id,
    "establishment_year":""+this.productsinformationform.controls['Establishmentyear'].value,
    "no_of_products":""+this.productsinformationform.controls['products'].value,
    "digital_catalogue":""+this.digital, 
    "online_sale":this.products,
    "online_platforms": this.productsinformationform.controls['PlatformNames'].value,
    "brands": this.productsinformationform.controls['AssociatedBrands'].value,
    "own_brands": this.productsinformationform.controls['Brands'].value,
    "dealing_brands": this.productsinformationform.controls['DealingBrands'].value,
    "days_for_change": this.productsinformationform.controls['howmanydays'].value,
    "lat": this.loti,
    "lng": this.logi
    };

     this.request.send_kyc_c(body).subscribe(
      (res: any) => {
        if (res.status == "1") {
          console.log("",""+res.message);
          this.sucess2=res.message;
        }
       else
        {
          this.error2 = ''+res.message;
        }
      },
      error2 => {
      }
    );


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



  //front image convert to string...

  frontimageFiles(event) {
    ​this.files = event.target.files;
    ​var reader = new FileReader();
    ​reader.onload = this._handleReaderLoaded2.bind(this);
    ​reader.readAsBinaryString(this.files[0]);
​}

​_handleReaderLoaded2(readerEvt) {
    ​var binaryString = readerEvt.target.result;
    ​this.frontimagestring = btoa(binaryString); 
     // Converting binary string data.
}

  //back image convert to string...

  backimageFiles(event) {
    ​this.files = event.target.files;
    ​var reader = new FileReader();
    ​reader.onload = this._handleReaderLoaded3.bind(this);
    ​reader.readAsBinaryString(this.files[0]);
​}

​_handleReaderLoaded3(readerEvt) {
    ​var binaryString = readerEvt.target.result;
    ​this.backimagestring = btoa(binaryString); 
     // Converting binary string data.
}

  //inside image convert to string...

  insideimageFiles(event) {
    ​this.files = event.target.files;
    ​var reader = new FileReader();
    ​reader.onload = this._handleReaderLoaded4.bind(this);
    ​reader.readAsBinaryString(this.files[0]);
​}

​_handleReaderLoaded4(readerEvt) {
    ​var binaryString = readerEvt.target.result;
    ​this.insideimagestring = btoa(binaryString); 
     // Converting binary string data.
}


//inside1 image convert to string...

inside1imageFiles(event) {
  ​this.files = event.target.files;
  ​var reader = new FileReader();
  ​reader.onload = this._handleReaderLoaded5.bind(this);
  ​reader.readAsBinaryString(this.files[0]);
​}

​_handleReaderLoaded5(readerEvt) {
  ​var binaryString = readerEvt.target.result;
  ​this.inside1imagestring = btoa(binaryString); 
   // Converting binary string data.
}

//inside2 image convert to string...

inside2imageFiles(event) {
  ​this.files = event.target.files;
  ​var reader = new FileReader();
  ​reader.onload = this._handleReaderLoaded6.bind(this);
  ​reader.readAsBinaryString(this.files[0]);
​}

​_handleReaderLoaded6(readerEvt) {
  ​var binaryString = readerEvt.target.result;
  ​this.inside2imagestring = btoa(binaryString); 
   // Converting binary string data.
}
//name image convert to string...

nameimageFiles(event) {
  ​this.files = event.target.files;
  ​var reader = new FileReader();
  ​reader.onload = this._handleReaderLoaded7.bind(this);
  ​reader.readAsBinaryString(this.files[0]);
​}

​_handleReaderLoaded7(readerEvt) {
  ​var binaryString = readerEvt.target.result;
  ​this.nameimagestring = btoa(binaryString); 
   // Converting binary string data.
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


// console.log("userdetails",""+userdetails);
      this.loginid=user.login_id;
      this.s_id=user.s_id;

  this.gstForm = this.formBuilder.group({
    numbergst: ['', Validators.required],
    namegst: ['', Validators.required],
    gstfile: ['', Validators.required],
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


