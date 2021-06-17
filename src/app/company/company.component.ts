import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { FileUpload } from 'src/app/services/fileupload';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RequestService } from "../services/request.service";
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.sass'],
  providers: [ToastrService],
})
export class CompanyComponent implements OnInit {
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  rows = [];
  scrollBarHorizontal = window.innerWidth < 1200;
  selectedRowData: selectRowInterface;
  newUserImg = 'assets/images/users/user-2.png';
  data = [];
  public Customers: any;
  filteredData = [];
  editForm: FormGroup;
  register: FormGroup;
  loadingIndicator = true;
  isRowSelected = false;
  selectedOption: string;
  reorderable = true;
  editcustmergroup: any;
  public selected: any[] = [];
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;
  url:any;
  private basePath = '/uploads';
  custmerCompanyNamevalue:any;
  custmerCompanyCodevalue:any;
  custmerAddressvalue:any;
  custmerCityvalue:any;
  custmerCountryvalue:any;
  custmerStatevalue:any;
  custmerPincodevalue:any;
  custmerMobileNovalue:any;
  custmerPhoneNovalue:any;
  custmerEmailvalue:any;
  custmerWebsitevalue:any;
  custmerGSTvalue:any;
  custmerLogovalue:any;
  custmerTermsvalue:any;

  states: any;

  columns = [
    { name: 'username' },
    { name: 'phone' },
    { name: 'email' },
    { name: 'password' }
  ];
  genders = [
    { id: '1', value: 'male' },
    { id: '2', value: 'female' },
  ];
  statusType = [
    { id: '1', value: 'Active' },
    { id: '2', value: 'Completed' },
    { id: '3', value: 'Pending' },
  ];
  designationType = [
    { id: '1', value: 'Manager' },
    { id: '2', value: 'Team Leader' },
    { id: '3', value: 'Clerk' },
  ];
  @ViewChild(DatatableComponent, { static: false }) table2: DatatableComponent;
  error: string;
  IdValue: any;
 
  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private toastr: ToastrService,private request: RequestService, private db: AngularFireDatabase, private storage: AngularFireStorage
  ) {
    this.editForm = this.fb.group({
      CompanyName: ['', [Validators.required]],
      CompanyCode: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      City: ['', [Validators.required]],
      state: ['', [Validators.required]],
      Country: ['', [Validators.required]],
      Pincode: ['', [Validators.required]],
      MobileNo: ['', [Validators.required]],
      PhoneNo: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Website: ['', [Validators.required]],
      GST : ['', [Validators.required]],
      Logo: ['', [Validators.required]],
      Terms: ['', [Validators.required]]
    });
    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 1200;
    };
  }
  // select record using check box
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);

    if (this.selected.length === 0) {
      this.isRowSelected = false;
    } else {
      this.isRowSelected = true;
    }
  }
  deleteSelected() {
    Swal.fire({
      title: 'Are you sure?',
      showCancelButton: true,
      confirmButtonColor: '#8963ff',
      cancelButtonColor: '#fb7823',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.value) {
        this.selected.forEach((row) => {
          this.deleteRecord(row);
        });
        this.deleteRecordSuccess(this.selected.length);
        this.selected = [];
        this.isRowSelected = false;
      }
    });
  }
  ngOnInit() {
    this.viewdata();
    this.register = this.fb.group({
      CompanyName: ['', [Validators.required]],
      CompanyCode: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      state: ['', [Validators.required]],
      City: ['', [Validators.required]],
      Country: ['', [Validators.required]],
      Pincode: ['', [Validators.required]],
      MobileNo: ['', [Validators.required]],
      PhoneNo: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Website: ['', [Validators.required]],
      GST : ['', [Validators.required]],
      Logo: ['', [Validators.required]],
      Terms: ['', [Validators.required]]
    });
  }
  // fetch data
  fetch(cb) {

    this.request.getcompany().subscribe((response) => {
     console.log(response);
     
              cb(response);
    }, (error) => {
      console.log(error);
    });

  }
  // add new record
  addRow(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
    this.register.patchValue({
      id: this.getId(10, 100),
      img: this.newUserImg,
    });

  }
  // edit record
  editRow(row, rowIndex, content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });



    this.request.fetchcompanyById(row._id).subscribe((response) => {
      this.editcustmergroup=response[0];
      console.log(response);


this.custmerCompanyNamevalue=this.editcustmergroup.CompanyName;
this.custmerCompanyCodevalue=this.editcustmergroup.CompanyCode;
this.custmerAddressvalue=this.editcustmergroup.Address;
this.custmerCityvalue=this.editcustmergroup.City;
this.custmerCountryvalue=this.editcustmergroup.Country;
this.custmerStatevalue=this.editcustmergroup.State;
this.custmerPincodevalue=this.editcustmergroup.Pincode;
this.custmerMobileNovalue=this.editcustmergroup.MobileNo;
this.custmerPhoneNovalue=this.editcustmergroup.PhoneNo;
this.custmerEmailvalue=this.editcustmergroup.Email;
this.custmerWebsitevalue=this.editcustmergroup.Website;
this.custmerGSTvalue=this.editcustmergroup.GST;
this.custmerLogovalue=this.url;
this.custmerTermsvalue=this.editcustmergroup.Terms;

        this.IdValue=this.editcustmergroup._id;

      //   this.editForm = this.formBuilder.group({
      //     CountryName2:[this.CountryValue, Validators.required],
      //     Countrycode2:[this.CountrycodeValue, Validators.required]
      // });
      // console.log(this.editForm.value);



      this.editForm.setValue({
        CompanyName:this.custmerCompanyNamevalue ,
        CompanyCode:this.custmerCompanyCodevalue,
        Address:this.custmerAddressvalue,
        City:this.custmerCityvalue,
        State:this.custmerStatevalue,
        Country:this.custmerCountryvalue,
        Pincode:this.custmerPincodevalue,
        MobileNo:this.custmerMobileNovalue,
        PhoneNo:this.custmerPhoneNovalue,
        Email:this.custmerEmailvalue,
        Website:this.custmerWebsitevalue,
        GST :this.custmerGSTvalue,
        Logo:this.url,
        Terms:this.custmerTermsvalue
      });
      this.selectedRowData = row;

    });




  }
  // delete single row
  deleteSingleRow(row) {
    Swal.fire({
      title: 'Are you sure?',
      showCancelButton: true,
      confirmButtonColor: '#8963ff',
      cancelButtonColor: '#fb7823',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.value) {
        this.deleteRecord(row);
        this.deleteRecordSuccess(1);
      }
    });
  }

  deleteRecord(row) {
    console.log("row",row._id);
    this.request.deletecompany(row._id).subscribe((response) => {
      console.log(response);
      this.viewdata();
     }, (error) => {
       console.log(error);
     });
  }

  arrayRemove(array, id) {
    return array.filter(function (element) {
      return element.id !== id;
    });
  }
  // save add new record
  onAddRowSave(form: FormGroup) {
  
    console.log(form.value);

    const edata = {
      CompanyName: form.value.CompanyName,
      CompanyCode:form.value.CompanyCode,
      Address:form.value.Address,
      City:form.value.City,
      Country:form.value.Country,
      State:form.value.State,
      Pincode:form.value.Pincode,
      MobileNo:form.value.MobileNo,
      PhoneNo:form.value.PhoneNo,
      Email:form.value.Email,
      Website:form.value.Website,
      Logo:this.url,
      GST:form.value.GST,
      Terms:form.value.Terms,
      };



    this.request.addcompany(edata).subscribe((res: any) => {
      if (res.status == 'success') {
        console.log(res);
        form.reset();
    this.modalService.dismissAll();
    this.viewdata();
    this.addRecordSuccess();

      }
      else if (res.status == 'error') {
        console.log("res",res);
        form.reset();
    this.modalService.dismissAll();
      }
    }, (error) => {
      console.log("error",error);
      form.reset();
      this.modalService.dismissAll();
    });


  }



viewdata(){
  this.loadstate();
  this.fetch((data) => {
    this.data = data;
    // this.filteredData = data;
    this.Customers=data.response;
    this.filteredData=data.response;
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 500);
  });
}
loadstate() {
  this.request.getstate().subscribe((response: any) => {
    this.states = response;
    console.log('state' ,this.states);
  }, (error) => {
    console.log(error);
  });
}



//addmemeber image
selectFile(event) {
  this.selectedFiles = event.target.files;
  this.upload();
}

upload() {
  const file = this.selectedFiles.item(0);
  this.selectedFiles = undefined;

  this.currentFileUpload = new FileUpload(file);
 this.pushFileToStorage(this.currentFileUpload).subscribe(
    percentage => {
      this.percentage = Math.round(percentage);
    },
    error => {
      console.log(error);
    }
  );

}


pushFileToStorage(fileUpload:FileUpload): Observable<number> {
  const filePath = `${this.basePath}/${fileUpload.file.name}`;
  const storageRef = this.storage.ref(filePath);
  const uploadTask = this.storage.upload(filePath, fileUpload.file);

  uploadTask.snapshotChanges().pipe(
    finalize(() => {
      storageRef.getDownloadURL().subscribe(downloadURL => {
        console.log('File available at', downloadURL);
        fileUpload.url = downloadURL;
        fileUpload.name = fileUpload.file.name;
        this.saveFileData(fileUpload);
        
       this.url=downloadURL
       console.log('url' , this.url);
      });
    })
  ).subscribe();

  return uploadTask.percentageChanges();
}

private saveFileData(fileUpload: FileUpload) {
  this.db.list(this.basePath).push(fileUpload);
}






  // save record on edit
  onEditSave(form: FormGroup) {

    const edata = {

      CompanyName: form.value.CompanyName,
      CompanyCode: form.value.CompanyCode,
      Address:form.value.Address,
      City: form.value.City,
      State: form.value.State,
      Country: form.value.Country,
      Pincode: form.value.Pincode,
      MobileNo: form.value.MobileNo,
      PhoneNo: form.value.PhoneNo,
      Email: form.value.Email,
      Website: form.value.Website,
      GST : form.value.GST,
      Logo:this.custmerLogovalue,
      Terms: form.value.Terms
     
  }
  this.request.updatecompany(this.IdValue,edata).subscribe((res : any) => {
    if (res.status == 'success') {
      this.modalService.dismissAll();
      this.viewdata();
      this.editRecordSuccess();
      return true;
    }
    else if (res.status == 'error') {
      this.modalService.dismissAll();
    }

  }, (error) => {
    console.log(error);
    this.modalService.dismissAll();
  });

  }
  // filter table data
  filterDatatable(event) {
    // get the value of the key pressed and make it lowercase
    const val = event.target.value.toLowerCase();
    // get the amount of columns in the table
    const colsAmt = this.columns.length;
    // get the key names of each column in the dataset
    const keys = Object.keys( this.filteredData[0]);
    // console.log("keys",""+keys);
    // assign filtered matches to the active datatable
    this.Customers = this.filteredData.filter(function (item) {
      // iterate through each row's column data
      for (let i = 0; i < colsAmt; i++) {
        // check for a match
        if (
          item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 ||
          !val
        ) {
           
      
          return true;
        }
      }
    });
    // whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  // get random id
  getId(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  addRecordSuccess() {
    this.toastr.success('Add Record Successfully', '');
  }
  editRecordSuccess() {
    this.toastr.success('Edit Record Successfully', '');
  }
  deleteRecordSuccess(count) {
    this.toastr.error(count + ' Records Deleted Successfully', '');
  }





}
export interface selectRowInterface {
  img: String;
  firstName: String;
  lastName: String;
}
