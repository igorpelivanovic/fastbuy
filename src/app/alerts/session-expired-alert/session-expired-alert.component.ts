import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faClock, faXmarkCircle, faEye, faEyeSlash, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { SessionExpiredAlertService } from 'src/app/services/session-expired-alert.service';
import { Valid } from 'src/app/validators/validators';

@Component({
  selector: 'app-session-expired-alert',
  templateUrl: './session-expired-alert.component.html',
  styleUrls: ['./../fullScreenAlert.scss', './session-expired-alert.component.scss']
})
export class SessionExpiredAlertComponent implements OnInit, OnDestroy {

  private icons = {
    faClock: faClock,
    faXmarkCircle: faXmarkCircle,
    faEye: faEye,
    faEyeSlash: faEyeSlash,
    faRightToBracket: faRightToBracket
  }

  private _showPassword : boolean = false

  private _showErrorMsg : boolean = false
  
  private _errorMsg: string = ""
 
  private _form !: FormGroup 

  protected isLoading : boolean = false

  private _renderAlert : boolean = false

  private renderAlertSubsctiption !: Subscription

  constructor(private formBuilder: FormBuilder, private accountService: AccountService, private sessionExpiredAlertService: SessionExpiredAlertService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm()
  }

  ngOnDestroy(): void {
    this.renderAlertSubsctiption.unsubscribe()
  }

  private initForm(): void{
    this._form = this.formBuilder.group({
      username: new FormControl("", [Validators.required, Valid.trimValue()]),
      password: new FormControl("", [Validators.required, Valid.trimValue()])
    })
  }

  private trimFormValue(group: FormGroup = this._form): void{
     Object.keys(group.controls).forEach(controlName=>{
      if(group.get(controlName) instanceof FormControl){
        group.get(controlName)?.setValue(group.get(controlName)?.value.trim())
        return
      }
      this.trimFormValue(group.get(controlName) as FormGroup)
     })
  }

  get icon(){
    return this.icons
  }

  get form(): FormGroup{
    return this._form
  }

  get showPassword(): boolean{
    return this._showPassword
  }

  get showErrorMsg() : boolean{
    return this._showErrorMsg
  }

  get errorMsg(): string{
    return this._errorMsg
  }

  toggleShowPassword(): void{
    this._showPassword = !this._showPassword
  }

  getControllForm(controlName: string, formGroupNames: string[] = []): FormControl{
    return this.getGroupForm(formGroupNames).get(controlName) as FormControl
  }

  getGroupForm(formGroupNames: string[] = []): FormGroup{
    let group : FormGroup = this._form
    formGroupNames.forEach((formGroupName : string)=>{ group=group.get(formGroupName) as FormGroup})
    return group
  }

  clearFormControll(controlName: string, formGroupNames: string[] = []): void{
    this.getControllForm(controlName, formGroupNames).setValue("")
  }

  submitForm(): void{
    if(this.isLoading) return
    this.trimFormValue()
    this.isLoading = true
    this.accountService.login(this._form.value).subscribe({
      next: (data)=>{
        this.isLoading = false
        this.authService.setUser(data)
        this.sessionExpiredAlertService.render = false
        this.router.navigate([this.router.url])
      },
      error: ()=>{
        this.isLoading = false
        this._showErrorMsg = true
        this._errorMsg = 'incorect username or password'
      }
    })
  }
  goToHome(): void{
    this.sessionExpiredAlertService.render = false
    this.router.navigate(['/home'])
  }

}
