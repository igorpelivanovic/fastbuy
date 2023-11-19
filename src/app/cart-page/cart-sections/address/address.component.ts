import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faChevronLeft, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { userData } from 'src/app/interfaces/account';
import { AuthService } from 'src/app/services/auth.service';
import { ShowListCartService } from 'src/app/services/show-list-cart.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input() formGroup !: FormGroup
  @Input() userData !: userData

  private icons = {
    faChevronLeft: faChevronLeft,
    faXmarkCircle: faXmarkCircle
  }

  constructor(private showListCartService: ShowListCartService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  get icon(){
    return this.icons
  }

  deActiveAddress():void{
    this.showListCartService.showList = true
  }
  get userHasLogin(): boolean{
    return this.authService.hasUser()
  }

  getFormControl(formControlName: string, arrayFormGroupNames: String[] = []): FormControl{
    return this.getFormGroup(arrayFormGroupNames).get(formControlName) as FormControl
  }

  getFormGroup(arrayFormGroup: String[]): FormGroup{
    let formGroup = this.formGroup
    arrayFormGroup.map((formGroupName: String)=>{
      formGroup = formGroup.get(formGroupName as string) as FormGroup
    })
    return formGroup
  }

  clearFormControl(formControlName: string, arrayFormGroupNames: String[] = []): void{
    this.getFormControl(formControlName, arrayFormGroupNames).setValue("")
  }

}
