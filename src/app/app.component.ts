import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
      department: [0, Validators.required],
      empName: [0, Validators.required],
      mobile: [0, Validators.required],
      gender: [0, Validators.required],
      joinDate: [0, Validators.required],
      email: [0, Validators.required],
      salary: [0, Validators.required],
      password: [0, Validators.required],
      confirmPass: [0, Validators.required],
      empStatus: [false, Validators.requiredTrue]
      
    })
  }
}
