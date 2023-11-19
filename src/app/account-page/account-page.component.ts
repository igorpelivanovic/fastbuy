import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { faArrowRightFromBracket, faRotate, faBan, faXmarkCircle, faFolder, faUser, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { userData } from '../interfaces/account';
import { slideIncDec } from '../animations/slideIncrementDecrement';
import { Valid } from '../validators/validators';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AppName } from 'src/environments/environment';
import { ComplitedAlertService } from '../services/complited-alert.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
  animations: [slideIncDec]
})
export class AccountPageComponent implements OnInit {

  private icons = {
    faArrowRightFromBracket: faArrowRightFromBracket,
    faRotate: faRotate,
    faBan: faBan,
    faXmarkCircle: faXmarkCircle,
    faFolder: faFolder,
    faUser: faUser,
    faLocationDot: faLocationDot,
    faPhone: faPhone
  }

  protected form!: FormGroup

  private userData !: userData

  protected isLoading : boolean = false

  protected changeDataHttpSend: boolean = false

  protected currentTab : number = 0

  private _requestError: boolean = false

  constructor(private complitedAlert: ComplitedAlertService, private accountService: AccountService, private formBuidler: FormBuilder, private router: Router, private title: Title) { }

  ngOnInit(): void {
    this.getUserData()
  }

  get icon(){
    return this.icons
  }

  get userNameOfUser():string{
    return this.userData.username
  }

  get dirtyData(): boolean{
    return this.form?.dirty || false
  }

  get requestError(): boolean{
    return this._requestError
  }

  private initDataForm():void{
    this.form = this.formBuidler.group({
      general: new FormGroup({
        firstName: new FormControl(this.userData.firstName, [Validators.required]),
        lastName: new FormControl(this.userData.lastName, [Validators.required])
      }),
      account: this.formBuidler.group({
        username: new FormControl(this.userData.username, [Validators.required, Valid.trimValue(6), Validators.minLength(6)]),
        password: this.formBuidler.group({
          password: new FormControl(this.userData.password, [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,20}$"), Validators.minLength(6)]),
          repeatPassword: new FormControl("")
        },{ validator: Valid.repeatPassword})
      }),
      contact: new FormGroup({
        email: new FormControl(this.userData.email, [Validators.required, Valid.trimValue(), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        phone: new FormControl(this.userData.phone, [Validators.required, Valid.trimValue(6), Validators.pattern("^([+-]{0,1}[ ]{0,1}[(]{0,1}[0-9]{1,4}[)]{0,1}[ ]{0,1}){0,4}$"), Validators.minLength(6),])
      }),
      address: new FormGroup({
        address: new FormControl(this.userData.address.address, [Validators.required, Valid.trimValue()]),
        city: new FormControl(this.userData.address.city, [Validators.required, Valid.trimValue()]),
        postalCode: new FormControl(this.userData.address.postalCode, [Validators.required, Valid.trimValue(), Validators.pattern("^[0-9]*$"),])
      })
    })
  }

  private getUserData(): void{
    this.accountService.getUserData().subscribe(
      {
        next: (data)=>{
          this.isLoading = true
          this.userData = data
          this.initDataForm()
          this.title.setTitle(`${this.userData.username} - ${AppName}`)
        },
        error: (err: HttpErrorResponse)=>{
          this.router.navigate(['/error'])
        }
      }
    )
  }

  private trimFormValue(form : FormGroup = this.form): void{
    Object.keys(form.controls).forEach((key: string)=>{
      if(form.get(key) instanceof FormControl){
        form.get(key)?.setValue(form.get(key)?.value.trim())
      }else{
        this.trimFormValue(form.get(key) as FormGroup)
      }
    })
  }

  getFormGroup(name: string): FormGroup{
    return this.form.get(name) as FormGroup
  }

  setActiveTab(num: number): void{
    this.currentTab = num
  }

  submitForm(): void{
    if(this.changeDataHttpSend) return
    this.trimFormValue()
    let data = Object.assign(this.form.value, {id: this.userData.id})
    this.changeDataHttpSend = true
    this.accountService.changeUserData(data).subscribe({
      next: (data)=>{
        this.userData = data
        this.resetForm()
        this.complitedAlert.complitedAlert = {message: 'profile data is update', time: 1500}
        this.changeDataHttpSend = false
      },
      error: (err: HttpErrorResponse)=>{
        this._requestError = true
        if(err.status == 401) return
        this.router.navigate(['/error'])
      }
    })
  }

  resetForm(): void{
    this.form.reset({
      general: {
        firstName: this.userData.firstName,
        lastName: this.userData.lastName,
      },
      account: {
        username: this.userData.username,
        password: {
          password: this.userData.password,
          repeatPassword: ""
        }
      },
      contact: {
        email: this.userData.email,
        phone: this.userData.phone
      },
      address: {
        address: this.userData.address.address,
        city: this.userData.address.city,
        postalCode: this.userData.address.postalCode
      }
    })
  }
  singOut():void{
    this.accountService.logout()
    this.router.navigate(['/singin'])
  }
}
