import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { faRightToBracket, faAngleRight, faAngleLeft, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { slideIncDec } from 'src/app/animations/slideIncrementDecrement';
import { userData } from 'src/app/interfaces/account';
import { AccountService } from 'src/app/services/account.service';
import { Valid } from 'src/app/validators/validators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./../forms.scss', './register-form.component.scss'],
  animations : [slideIncDec]
})
export class RegisterFormComponent implements OnInit, OnDestroy {

  @Output("setStatusRequest") setStatusRequest = new EventEmitter()

  protected registerForm !: FormGroup

  private accountFormSubscribe !: Subscription | undefined
  private registerSubscribe !: Subscription | undefined

  private titleFormTabs = [
    "general", "account", "contact", "address"
  ]

  private icons = {
    faRightToBracket: faRightToBracket,
    faAngleRight: faAngleRight,
    faAngleLeft: faAngleLeft,
    faXmarkCircle: faXmarkCircle
  }

  protected currentRegisterTab : number = 0
  
  protected requestSend: boolean = false
  protected errorResponse : boolean = false
  protected requestFinish: boolean = false
  protected infoMessage !: string

  constructor(private formBuilder: FormBuilder, private acountService: AccountService) { }
  
  get icon(){
    return this.icons
  }

  get titleFormTab(): string[]{
    return this.titleFormTabs
  }

  get lastFormTab(): boolean{
    return this.formGroupAsObject.length == this.currentRegisterTab+1
  }

  get formGroupAsObject(): any{
    return Object.values(this.registerForm.controls)
  }

  get currentGroupValid(): boolean{
    return this.formGroupAsObject[this.currentRegisterTab].valid
  }

  ngOnInit(): void {
    this.initRegisterForm()
  }

  ngOnDestroy(): void {
    this.accountFormSubscribe?.unsubscribe()
    this.registerSubscribe?.unsubscribe()
  }

  private initRegisterForm(): void{
    this.registerForm = this.formBuilder.group({
      general : new FormGroup({
        firstName: new FormControl("", [Validators.required, Valid.trimValue()]),
        lastName: new FormControl("", [Validators.required, Valid.trimValue()])
      }) as FormGroup,
      account: this.formBuilder.group({
        username: new FormControl("", [Validators.required, Valid.trimValue(6), Validators.minLength(6)]),
        password: new FormControl("", [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,20}$"), Validators.minLength(8)]),
        repeatPassword: new FormControl({value: "", disabled: true} , Validators.required)
      },{ validator: Valid.repeatPassword}),
      contact: new FormGroup({
        phone: new FormControl("", [Validators.required, Valid.trimValue(6), Validators.pattern("^([+-]{0,1}[ ]{0,1}[(]{0,1}[0-9]{1,4}[)]{0,1}[ ]{0,1}){0,4}$"), Validators.minLength(6),]),
        email: new FormControl("", [Validators.required, Valid.trimValue(), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
      }),
      address: new FormGroup({
        address: new FormControl("", [Validators.required, Valid.trimValue()]),
        city: new FormControl("", [Validators.required, Valid.trimValue()]),
        postalCode: new FormControl("", [Validators.required, Valid.trimValue(), Validators.pattern("^[0-9]*$"),])
      })
    })
    this.accountFormSubscribe = this.getGroupForm('account').get('password')?.valueChanges.subscribe({
      next: (data)=>{
        if(this.getGroupForm('account').get('password')?.valid){
          this.getGroupForm('account').get('repeatPassword')?.enable()
          return
        }
        this.getGroupForm('account').get('repeatPassword')?.disable()
        this.getGroupForm('account').get('repeatPassword')?.reset("")
        return
      }
    })
  }

  getGroupForm(groupName: string): FormGroup{
    return this.registerForm.get(groupName) as FormGroup
  }

  prevFormTab(): void{
    if(this.currentRegisterTab <= 0) return
    this.currentRegisterTab--
  }

  nextFormTab(): void{
    if(this.titleFormTab.length-1 == this.currentRegisterTab) return
    this.currentRegisterTab++
  }

  checkNext():void{
    if(this.lastFormTab){
      this.registerUser()
      return
    }
    if(this.currentGroupValid){
      this.nextFormTab()
    }
  }
  private trimFormValue(): void{
    Object.keys(this.registerForm.controls).forEach(formGroupKey=>{
      Object.keys(this.getGroupForm(formGroupKey).controls).forEach(formControlKey=>{
        this.registerForm.get(formGroupKey)?.get(formControlKey)?.setValue(this.registerForm.get(formGroupKey)?.get(formControlKey)?.value.trim())
      })
    })
  }
  private resetForm():void{
    Object.keys(this.registerForm.controls).forEach(formGroupKey=>{
      Object.keys(this.getGroupForm(formGroupKey).controls).forEach(formControlKey=>{
        this.registerForm.get(formGroupKey)?.get(formControlKey)?.reset("")
      })
    })
  }
  private resetRequestIndicator(): void{
    this.requestSend = true
    this.requestFinish = false
    this.errorResponse = false
    this.infoMessage = ""
    this.setStatusRequest.emit(this.requestSend)
  }
  private setRequestIndicator(msg: string , error : boolean = false){
    this.requestSend = false
    this.requestFinish = true
    this.errorResponse = error
    this.infoMessage = msg
    this.setStatusRequest.emit(this.requestSend)
  }

  private registerUser():void{
    if(this.registerForm.invalid) return
    this.trimFormValue()
    let data : userData = Object.assign(this.registerForm.value.general,
                                            this.registerForm.value.account, 
                                            { address: this.registerForm.value.address }, 
                                            this.registerForm.value.contact)
    this.resetRequestIndicator()
    this.registerSubscribe = this.acountService.register(data).subscribe({
      next: (data)=>{
      },
      error: (err: HttpErrorResponse)=>{
        this.setRequestIndicator("Somthing wrong, please try it later", true)
      },
      complete: ()=>{
        this.setRequestIndicator("Registration is complited")
        this.currentRegisterTab = 0
        this.resetForm()
      }
    })
  }
  
}
