import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faXmarkCircle, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-account-form-group',
  templateUrl: './account-form.component.html',
  styleUrls: ['./../../formGroup.scss']
})
export class AccountFormComponent implements OnInit {

  @Input() group !: FormGroup

  private icons = {
    faXmarkCircle: faXmarkCircle,
    faEyeSlash: faEyeSlash,
    faEye: faEye
  }

  private passwordsHidden = {
    regular: true as boolean,
    repeat: true as boolean
  }


  constructor() { }

  ngOnInit(): void {
  }

  get icon(){
    return this.icons
  }

  get regularPassHidden(): boolean{
    return this.passwordsHidden.regular
  }

  get repeatPassHidden(): boolean{
    return this.passwordsHidden.repeat
  }

  toggleRegularPassHidden(): void{
    this.passwordsHidden.regular = !this.passwordsHidden.regular 
  }

  toggleRepeatPassHidden(): void{
    this.passwordsHidden.repeat = !this.passwordsHidden.repeat
  }

  getControl(contolForm: string): FormControl{
    return this.group.controls[contolForm] as FormControl
  }

  clearControl(contolForm: string):void{
    this.getControl(contolForm).reset("")
  }

}
