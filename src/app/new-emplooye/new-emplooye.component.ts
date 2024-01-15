import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmplooyeDataService } from '../Services/emplooye-data.service'; 
import { empVM } from '../../Models/Models';
import { passwordMatch } from '../../Validators/PasswordMatch'; 


@Component({
  selector: 'app-new-emplooye',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, NgClass, HeaderComponent],
  templateUrl: './new-emplooye.component.html',
  styleUrl: './new-emplooye.component.css'
})
export class NewEmplooyeComponent {

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
   constructor( private _fb: FormBuilder,private empData:EmplooyeDataService ){
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
