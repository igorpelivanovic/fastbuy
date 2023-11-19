import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-general-form-group',
  templateUrl: './general-form-group.component.html',
  styleUrls: ['./../../formGroup.scss']
})
export class GeneralFormGroupComponent implements OnInit {

  @Input() group !: FormGroup

  private icons = {
    faXmarkCircle: faXmarkCircle
  }

  constructor() { }

  ngOnInit(): void {
  }

  get icon(){
    return this.icons
  }

  getControl(contolForm: string): FormControl{
    return this.group.controls[contolForm] as FormControl
  }

  clearControl(contolForm: string):void{
    this.getControl(contolForm).reset("")
  }

}