import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmplooyeDataService {

  constructor() { }

   emplooyes(){
    return [
      {id:1, department:"Accounts", empName:"Hassan",mobile:"03447227983",gender:"Male",joinDate:"01-01-2024",email:"Hassan@gmail.com",salary:43000,password:"123456",empStatus:true},
      {id:2, department:"Administartor", empName:"Ali",mobile:"03334929394",gender:"Male",joinDate:"10-01-2024",email:"alibakhat999@gmail.com",salary:41000,password:"123456",empStatus:true},
      {id:3, department:"Manager", empName:"Arham",mobile:"03342343321",gender:"Male",joinDate:"25-06-2023",email:"arham999@gmail.com",salary:46000,password:"123456",empStatus:true},
      {id:4, department:"Accounts", empName:"Abuzar",mobile:"03543333456",gender:"Male",joinDate:"01-05-2023",email:"abuzar@gmail.com",salary:47000,password:"123456",empStatus:true},
  ]
   } 
}