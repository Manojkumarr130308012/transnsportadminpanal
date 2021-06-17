import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RequestService } from "../services/request.service";


import { FileUpload } from 'src/app/services/fileupload';

import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass'],
  providers: [ToastrService]
})
export class UsersComponent implements OnInit {
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  rows = [];
  scrollBarHorizontal = window.innerWidth < 1200;
  selectedRowData: selectRowInterface;
  newUserImg = 'assets/images/users/user-2.png';
  data = [];
  public Customers: any;
  filteredData = [];
  public selected: any[] = [];
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;
  url:any;
  private basePath = '/uploads';
  editForm: FormGroup;
  register: FormGroup;
  loadingIndicator = true;
  isRowSelected = false;
  selectedOption: string;
  reorderable = true;
  editcustmergroup: any;

  custmernamevalue:any;
  custmerphonevalue:any;
  custmeremailvalue:any;
  custmercodevalue:any;
  columns = [
    { name: 'username' },
    { name: 'phone' },
    { name: 'email' },
    { name: 'code' }
  ];
  genders = [
    { id: 'male', value: 'male' },
    { id: 'female', value: 'female' },
  ];
  statusType = [
    { id: 'Active', value: 'Active' },
    { id: 'InActive', value: 'InActive' },
  ];
  designationType = [
    { id: '1', value: 'Manager' },
    { id: '2', value: 'Team Leader' },
    { id: '3', value: 'Clerk' },
  ];
  @ViewChild(DatatableComponent, { static: false }) table2: DatatableComponent;
  error: string;
  IdValue: any;
  Designations: any;
  custmerDesignationvalue: any;
  custmerBranchonvalue: any;
  branches: any;
  custmergendernvalue: any;
  custmerStatusvalue: any;
  custmerAddressvalue: any;
  custmerAadhaarvalue: any;
  custmerPANvalue: any;
  custmerFathernamevalue: any;
  custmerFathermobilevalue: any;
  custmerBasicpayvalue: any;
  custmerBankdetailsvalue: any;
  custmerRemarks1value: any;
  custmerPFvalue: any;
  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private toastr: ToastrService,private request: RequestService, private db: AngularFireDatabase, private storage: AngularFireStorage
  ) {
    this.editForm = this.fb.group({
      Name: ['', [Validators.required]],
      Mobile: ['', [Validators.required]],
      Email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      Code: ['', [Validators.required]],
      Branch: ['', [Validators.required]],
      Designation: ['', [Validators.required]],
      Gender: ['', [Validators.required]],
      Status: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      Aadhaar: ['', [Validators.required]],
      PAN: ['', [Validators.required]],
      Fathername: ['', [Validators.required]],
      Fathermobile: ['', [Validators.required]],
      Basicpay: ['', [Validators.required]],
      Bankdetails: ['', [Validators.required]],
      Remarks1: ['', [Validators.required]],
      PF: ['', [Validators.required]],
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
      Name: ['', [Validators.required]],
      Mobile: ['', [Validators.required]],
      Email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      Code: ['', [Validators.required]],      
      Branch: ['', [Validators.required]],
      Designation: ['', [Validators.required]],
      Gender: ['', [Validators.required]],
      Status: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      Aadhaar: ['', [Validators.required]],
      PAN: ['', [Validators.required]],
      Fathername: ['', [Validators.required]],
      Fathermobile: ['', [Validators.required]],  
      Basicpay: ['', [Validators.required]],
      Bankdetails: ['', [Validators.required]],
      Remarks1: ['', [Validators.required]],
      PF: ['', [Validators.required]],
    });
  }
  // fetch data
  fetch(cb) {

    this.request.getusers().subscribe((response) => {
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



    this.request.fetchusersById(row._id).subscribe((response) => {
      this.editcustmergroup=response[0];
      console.log(response);
        this.custmernamevalue=this.editcustmergroup.Name;
        this.custmerphonevalue=this.editcustmergroup.Mobile;
        this.custmeremailvalue=this.editcustmergroup.Email;
        this.custmercodevalue=this.editcustmergroup.Code;
        this.custmerDesignationvalue=this.editcustmergroup.Designation;
        this.custmerBranchonvalue=this.editcustmergroup.Branch;
        this.custmergendernvalue=this.editcustmergroup.Gender;
        this.custmerStatusvalue=this.editcustmergroup.Status;
        this.custmerAddressvalue=this.editcustmergroup.Address;
        this.custmerAadhaarvalue=this.editcustmergroup.Aadhaar;
        this.custmerPANvalue=this.editcustmergroup.PAN;
        this.custmerFathernamevalue=this.editcustmergroup.Fathername;
        this.custmerFathermobilevalue=this.editcustmergroup.Fathermobile;
        this.custmerBasicpayvalue=this.editcustmergroup.Basicpay;
        this.custmerBankdetailsvalue=this.editcustmergroup.Bankdetails;
        this.custmerRemarks1value=this.editcustmergroup.Remarks1;
        this.custmerPFvalue=this.editcustmergroup.PF;
        this.IdValue=this.editcustmergroup._id;

      //   this.editForm = this.formBuilder.group({
      //     CountryName2:[this.CountryValue, Validators.required],
      //     Countrycode2:[this.CountrycodeValue, Validators.required]
      // });
      // console.log(this.editForm.value);



      this.editForm.setValue({
        Name: this.custmernamevalue,
        Mobile: this.custmerphonevalue,
        Email: this.custmeremailvalue,
        Code: this.custmercodevalue,
        Branch: this.custmerBranchonvalue,
        Designation: this.custmerDesignationvalue,
        Gender: this.custmergendernvalue,
        Status: this.custmerStatusvalue,
        Address: this.custmerAddressvalue,
        Aadhaar:this.custmerAadhaarvalue,
        PAN:this.custmerPANvalue,
        Fathername:this.custmerFathernamevalue,
        Fathermobile:this.custmerFathermobilevalue,
        Basicpay: this.custmerBasicpayvalue,
        Bankdetails: this.custmerBankdetailsvalue,
        Remarks1: this.custmerRemarks1value,
        PF: this.custmerPFvalue,
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
    this.request.deleteusers(row._id).subscribe((response) => {
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
      Name: form.value.Name,
      Code:form.value.Code,
      Mobile:form.value.Mobile,
      Email:form.value.Email,
      Designation:form.value.Designation,
      Branch:form.value.Branch,
      Address:form.value.Address,
      Gender:form.value.Gender,
      Aadhaar:form.value.Aadhaar,
      PAN:form.value.PAN,
      PF:this.url,
      Fathername:form.value.Fathername,
      Fathermobile:form.value.Fathermobile,
      Basicpay:form.value.Basicpay, 
      Bankdetails:form.value.Bankdetails,
      Remarks1:form.value.Remarks1,
      Status:form.value.Status,
      };
    this.request.addusers(edata).subscribe((res: any) => {
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
  this.loadDesignations();
  this.loadBranch();
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
loadDesignations() {
  this.request.getdesignation().subscribe((response: any) => {
    this.Designations = response;
    console.log('state' ,this.Designations);
  }, (error) => {
    console.log(error);
  });
}
loadBranch() {
  this.request.getbranch().subscribe((response: any) => {
    this.branches = response;
    console.log('state' ,this.branches);
  }, (error) => {
    console.log(error);
  });
}
  // save record on edit
  onEditSave(form: FormGroup) {

    const edata = {
      Name: form.value.Name,
      Mobile: form.value.Mobile,
      Email: form.value.Email,
      Code: form.value.Code,  
      Designation: form.value.Designation,
      Branch: form.value.Branch,
      Gender: form.value.Gender,
      Status: form.value.Status,
      Address: form.value.Address,
      Aadhaar: form.value.Aadhaar,
      PAN: form.value.PAN,
      Fathername: form.value.Fathername,
      Fathermobile: form.value.Fathermobile,
      Basicpay: form.value.Basicpay,
      Bankdetails: form.value.Bankdetails,
      Remarks1: form.value.Remarks1,
      PF:  this.url,
  }
  this.request.updateusers(this.IdValue,edata).subscribe((res : any) => {
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
