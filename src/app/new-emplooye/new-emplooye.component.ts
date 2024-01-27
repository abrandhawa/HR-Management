import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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

  visible: boolean = true;
  changetype: boolean = true;

  visibleTwo: boolean = true;
  changetypeTwo: boolean = true;

  emplooyeForm!: FormGroup;

  users: empVM[];



  constructor(private fb: FormBuilder, private empData: EmplooyeDataService) {
    this.users = empData.emplooyes();

    this.emplooyeForm = this.fb.group({
      id: [0],
      department: new FormControl('', [Validators.required]),
      empName: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required, Validators.maxLength(11)]),
      gender: new FormControl('', [Validators.required]),
      joinDate: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      salary: new FormControl('', [Validators.required, Validators.maxLength(8)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPass: new FormControl('', [Validators.required, Validators.minLength(6)]),
      empStatus: new FormControl(false, [Validators.requiredTrue])
    }, [passwordMatch('password', 'confirmPass')])

  }



  ngOnInit() {

  }


  // setEmpForm() {
  //   this.emplooyeForm = this._fb.group({
  //     id: [0],
  //     department: ["", Validators.required],
  //     empName: ["", Validators.required],
  //     mobile: ["", Validators.required],
  //     gender: ["", Validators.required],
  //     joinDate: ["", Validators.required],
  //     email: ["", Validators.required, Validators.email],
  //     salary: ["", Validators.required],
  //     password: ["", Validators.required],
  //     confirmPass: ["", Validators.required],
  //     empStatus: [false, Validators.requiredTrue]

  //   }, [passwordMatch('password', 'confirmPass')])
  // }







  formSubmit() {
    if (this.emplooyeForm.valid) {
      this.users.push(this.emplooyeForm.value)
      console.log(this.users)
      alert("register sucessfully")
    } else {
      this.emplooyeForm.markAllAsTouched();
    }
  }





  resetBtn() {
    this.emplooyeForm.reset();
  }


  cancelBtn() {
    this.emplooyeForm.reset();
  }

  toggleEyeTwo() {
    this.visibleTwo = !this.visibleTwo;
    this.changetypeTwo = !this.changetypeTwo;
  }


  toggleEye() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
}
