import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-general-form-tab',
  templateUrl: './general-form-tab.component.html',
  styleUrls: ['./../formTab.scss']
})
export class GeneralFormTabComponent implements OnInit {

  @Input() formGroup !: FormGroup

  private icons = {
    faXmarkCircle: faXmarkCircle
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
