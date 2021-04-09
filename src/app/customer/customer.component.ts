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

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass'],
  providers: [ToastrService],
})
export class CustomerComponent implements OnInit {
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
  custmernamevalue:any;
  custmerphonevalue:any;
  custmeremailvalue:any;
  custmerpasswordvalue:any;
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
    private toastr: ToastrService,private request: RequestService
  ) {
    this.editForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      phone: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: ['', [Validators.required]]
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
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      phone: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: ['', [Validators.required]]
    });
  }
  // fetch data
  fetch(cb) {

    this.request.getcustomer().subscribe((response) => {
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



    this.request.fetchcustomerById(row._id).subscribe((response) => {
      this.editcustmergroup=response[0];
      console.log(response);
        this.custmernamevalue=this.editcustmergroup.username;
        this.custmerphonevalue=this.editcustmergroup.phone;
        this.custmeremailvalue=this.editcustmergroup.email;
        this.custmerpasswordvalue=this.editcustmergroup.password;
        this.IdValue=this.editcustmergroup._id;

      //   this.editForm = this.formBuilder.group({
      //     CountryName2:[this.CountryValue, Validators.required],
      //     Countrycode2:[this.CountrycodeValue, Validators.required]
      // });
      // console.log(this.editForm.value);



      this.editForm.setValue({
        username: this.custmernamevalue,
        phone: this.custmerphonevalue,
        email: this.custmeremailvalue,
        password: this.custmerpasswordvalue,
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
    this.request.deletecustomer(row._id).subscribe((response) => {
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
    this.request.addcustomer(form.value).subscribe((res: any) => {
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

  // save record on edit
  onEditSave(form: FormGroup) {

    const edata = {
      username: form.value.username,
      phone: form.value.phone,
      email: form.value.email,
      password: form.value.password
  }
  this.request.updatecustomer(this.IdValue,edata).subscribe((res : any) => {
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
