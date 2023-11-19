import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { faRightToBracket, faXmarkCircle, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { loginData } from 'src/app/interfaces/account';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { Valid } from 'src/app/validators/validators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [ './../formGroup.scss', './../forms.scss', './login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {

  @Output("setStatusRequest") setStatusRequest = new EventEmitter()

  private icons = {
    faRightToBracket: faRightToBracket,
    faXmarkCircle: faXmarkCircle,
    faEyeSlash: faEyeSlash,
    faEye: faEye
  }

  private loginFormSubscriber !: Subscription | undefined

  protected regularPassHidden: boolean = true

  protected loginForm !: FormGroup 

  protected requestSend: boolean = false
  protected errorResponse : boolean = false
  protected requestFinish: boolean = false
  protected infoMessage !: string

  constructor(private formBuilder: FormBuilder, private accountService: AccountService, private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  get icon(){
    return this.icons
  }

  private resetRequestIndicator():void{
    this.requestSend = true
    this.errorResponse = false
    this.requestFinish = false
    this.infoMessage = ""
    this.setStatusRequest.emit(this.requestSend)
  }

  private setRequestIndicator(msg: string, error: boolean = false): void{
    this.requestSend = false
    this.errorResponse = error
    this.requestFinish = true
    this.infoMessage = msg
    this.setStatusRequest.emit(this.requestSend)
  }

  private trimFormValue(): void{
    Object.keys(this.loginForm.controls).forEach(keyFormControl=>{
      this.loginForm.get(keyFormControl)?.setValue(this.loginForm.get(keyFormControl)?.value.trim())
    })
  }

  private handleErrorMessage(statusCode: number): void{
    if(statusCode == 400){
      this.setRequestIndicator("Incorrect username or password", true)
      return
    }
    this.setRequestIndicator("Somthing wrong, please try it later", true)
  }

  ngOnDestroy(): void {
    this.loginFormSubscriber?.unsubscribe()
  }

  ngOnInit(): void {
    this.initLoginForm()
  }

  private initLoginForm():void{
    this.loginForm = this.formBuilder.group({
      username: new FormControl("", [Validators.required, Valid.trimValue()]),
      password: new FormControl("", [Validators.required, Valid.trimValue()])
    })
  }

  getControl(controlForm: string): FormControl{
    return this.loginForm.get(controlForm) as FormControl
  }

  clearControl(controlForm: string): void{
    this.getControl(controlForm).reset("")
  }

  toggleRegularPassHidden(): void{
    this.regularPassHidden = !this.regularPassHidden
  }

  submitLoginForm(): void{
    if(this.loginForm.invalid) return
    this.loginUser()
  }

  private loginUser():void{
    this.trimFormValue()
    let data = this.loginForm.value as loginData
    this.resetRequestIndicator()
    this.loginFormSubscriber = this.accountService.login(data).subscribe({
      next: (data)=>{
        this.authService.setUser(data)
        let returnUrl : string = this.route.snapshot.queryParams['returnUrl'] || '/'
        this.router.navigateByUrl(returnUrl)
      },
      error : (err: HttpErrorResponse)=>{
        this.handleErrorMessage(err.status)
      },
      complete: ()=>{
      }
    })
  }

}
