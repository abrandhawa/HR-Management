import { AbstractControl } from "@angular/forms";



export function passwordMatch(password:string,confirmPass:string){


    return function(form:AbstractControl){
    const passwordValue = form.get(password)?.value;
    const confirmPasswordValue = form.get(confirmPass)?.value;

    if(passwordValue === confirmPasswordValue){
        return null
    } return {passwordMismatchError : true}
  }
}