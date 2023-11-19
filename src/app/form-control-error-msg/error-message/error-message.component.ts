import { Component, Input, OnInit } from '@angular/core';
import { errorInputMsgs } from 'src/app/interfaces/formErrorMsg';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

  @Input("errors") errors !: any
  @Input("input") input !: string | null

  private errorMsgs = {
    required: "This field is required",
    trim: "This field is required",
    minlength: "The entered value is too short",
    pattern: "The entered value must have one upper, lower case letter, one digit character",
    samePass: "Passwords do not match",
    email: {
      required: "This field is required",
      trim: "This field is required",
      pattern: "This value is invalid"
    },
    phoneNumber: {
      required: "This field is required",
      pattern: "This value is invalid",
      minlength: "The entered value is too short",
    },
    postalCode: {
      required: "This field is required",
      trim: "This field is required",
      pattern: "This value is invalid"
    }
  } as errorInputMsgs

  constructor() { }

  get error(){
    return this.errorMsgs
  }
  
  get errorKey():any{
    return Object.entries(this.errors)[0][0]
  }

  get renderError(): string{
    if(this.input){
      let val = this.errorMsgs[this.input as keyof errorInputMsgs]
      return val[this.errorKey] as string
    }
    return this.errorMsgs[this.errorKey as keyof errorInputMsgs] as string

  }

  ngOnInit(): void {
  }
}
