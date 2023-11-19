import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faEye, faEyeSlash, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-form-tab',
  templateUrl: './contact-form-tab.component.html',
  styleUrls: ['./../formTab.scss']
})
export class ContactFormTabComponent implements OnInit {

  @Input() formGroup !: FormGroup

  private icons = {
    faXmarkCircle: faXmarkCircle,
    faEye: faEye,
    faEyeSlash: faEyeSlash
  }

  constructor() { }
  
  ngOnInit(): void {
  }

  get icon(){
    return this.icons
  }

  getFormControl(controlName: string): FormControl{
    return this.formGroup.get(controlName) as FormControl
  }
  clearFormControl(controlName: string): void{
    this.getFormControl(controlName).setValue("")
  }
}
