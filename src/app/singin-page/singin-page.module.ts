import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinginPageRoutingModule } from './singin-page-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import { FormControlErrorMsgModule } from '../form-control-error-msg/form-control-error-msg.module';

import { SinginPageComponent } from './singin-page.component';
import { DirectivesModule } from '../directives/directives.module';
import { RegisterFormComponent } from './register-form/register-form.component';
import { GeneralFormGroupComponent } from './register-form/general-form-group/general-form-group.component';
import { AccountFormComponent } from './register-form/account-form-group/account-form.component';
import { ContactFormGroupComponent } from './register-form/contact-form-group/contact-form-group.component';
import { AddressFormGroupComponent } from './register-form/address-form-group/address-form-group.component';
import { LoadingBoxComponent } from './loading-box/loading-box.component';

import { LoaderModule } from '../loader/loader.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { UsersListComponent } from './users-list/users-list.component';


@NgModule({
  declarations: [
    SinginPageComponent,
    RegisterFormComponent,
    GeneralFormGroupComponent,
    AccountFormComponent,
    ContactFormGroupComponent,
    AddressFormGroupComponent,
    LoadingBoxComponent,
    LoginFormComponent,
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SinginPageRoutingModule,
    ReactiveFormsModule,
    DirectivesModule,
    LoaderModule,
    FormControlErrorMsgModule
  ]
})
export class SinginPageModule { }
