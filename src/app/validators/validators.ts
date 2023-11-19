import { AbstractControl, FormControl, FormGroup } from "@angular/forms";

export class Valid{

    static trimValue(minLenght: number = 1){
        return (formControl: AbstractControl)=>{
            let val = String(formControl.value)
            if(val.trim().length == 0) return {
                trim: true
            }
            if(val.trim().length < minLenght)  return {
                minlength: true
            }
            return null
           
        }
    }

    static repeatPassword(formGroup: FormGroup){
        let passFormControl = formGroup.get("password") as FormControl
        let repeatPassFormControl= formGroup.get("repeatPassword") as FormControl
        if(passFormControl.pristine) return 
        if(passFormControl.value != repeatPassFormControl.value) return {
            samePass: true
        }
        return null
    }

    static toBeValidNumber(formControl: AbstractControl): object | null{
        if(!isNaN(formControl.value)) return null
        return {
            validNumber: true
        }
    }
        
}