import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmplooyeDataService } from './Services/emplooye-data.service';
import {empVM} from '../Models/Models';
import { passwordMatch } from '../Validators/PasswordMatch';
import { HeaderComponent } from "./header/header.component";
import { EmplooyesRecordComponent } from "./emplooyes-record/emplooyes-record.component";
import { FooterComponent } from "./footer/footer.component";






@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ReactiveFormsModule, NgClass, HeaderComponent, EmplooyesRecordComponent, RouterModule, FooterComponent]
})
export class AppComponent {
  title = 'HR-Managment';
visible:boolean=true;
changetype:boolean=true;

visibleTwo:boolean=true;
changetypeTwo:boolean=true;

toggleEyeTwo(){
  this.visibleTwo= !this.visibleTwo;
  this.changetypeTwo= !this.changetypeTwo;
}


toggleEye(){
  this.visible= !this.visible;
  this.changetype= !this.changetype;
}

  emplooyeForm: FormGroup = new FormGroup({});
  
    users:empVM[];
   constructor( private _fb: FormBuilder, private empData:EmplooyeDataService){
    this.users=empData.emplooyes();
    
  }

  ngOnInit(){
 this.setEmpForm();
  }

  setEmpForm(){
    this.emplooyeForm =this._fb.group({
      id:[0],
      department: ["", Validators.required],
      empName: ["", Validators.required],
      mobile: ["", Validators.required],
      gender: ["", Validators.required],
      joinDate: ["", Validators.required],
      email: ["", Validators.required],
      salary: ["", Validators.required],
      password: ["", Validators.required],
      confirmPass: ["", Validators.required],
      empStatus: [false, Validators.requiredTrue]
      
    },[passwordMatch('password','confirmPass')])
  }

  formSubmit(){
    this.users.push(this.emplooyeForm.value)
    console.log(this.users);
  }

  get f(){
   return this.emplooyeForm.controls;
  }

  resetBtn(){
    this.emplooyeForm.reset();
  }

  cancelBtn(){
    this.emplooyeForm.reset();
  }

  
}
