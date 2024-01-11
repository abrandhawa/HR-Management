import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { clippingParents } from '@popperjs/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HR-Managment';
  emplooyeForm: FormGroup = new FormGroup({});

  constructor( private _fb: FormBuilder){

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
      
    })
  }

  formSubmit(){
    console.log(this.emplooyeForm.value);
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
