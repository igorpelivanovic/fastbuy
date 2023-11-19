import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faXmarkCircle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-account-form-tab',
  templateUrl: './account-form-tab.component.html',
  styleUrls: ['./../formTab.scss']
})
export class AccountFormTabComponent implements OnInit{

  @Input() formGroup !: FormGroup

  private icons = {
    faXmarkCircle: faXmarkCircle,
    faEye: faEye,
    faEyeSlash: faEyeSlash
  }

  public hiddenPassword: boolean = true
  public hiddenRepeatPassword: boolean = true

  constructor() { }
  ngOnInit(): void {
  }

  get icon(){
    return this.icons
  }

  getFormControl(controlName: string, group: FormGroup = this.formGroup): FormControl{
    return group.get(controlName) as FormControl
  }
  getFormGroup(groupName: string): FormGroup{
    return this.formGroup.get(groupName) as FormGroup
  }
  clearFormControl(controlName: string, group: FormGroup = this.formGroup): void{
    this.getFormControl(controlName, group).setValue("")
  }
  toggleHidePass(): void{
    this.hiddenPassword = !this.hiddenPassword
  }
  toggleHideRepPass(): void{
    this.hiddenRepeatPassword = !this.hiddenRepeatPassword
  }

}
