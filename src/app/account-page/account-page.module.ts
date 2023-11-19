import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountPageRoutingModule } from './account-page-routing.module';
import { AccountPageComponent } from './account-page.component';

import { FormControlErrorMsgModule } from '../form-control-error-msg/form-control-error-msg.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GeneralFormTabComponent } from './general-form-tab/general-form-tab.component';
import { AccountFormTabComponent } from './account-form-tab/account-form-tab.component';
import { ContactFormTabComponent } from './contact-form-tab/contact-form-tab.component';
import { AddressFormTabComponent } from './address-form-tab/address-form-tab.component';
import { LoaderModule } from '../loader/loader.module';
import { PipesModule } from '../pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AccountPageComponent,
    GeneralFormTabComponent,
    AccountFormTabComponent,
    ContactFormTabComponent,
    AddressFormTabComponent,
  ],
  imports: [
    CommonModule,
    AccountPageRoutingModule,
    FontAwesomeModule,
    LoaderModule,
    PipesModule,
    ReactiveFormsModule,
    FormControlErrorMsgModule,
  ]
})
export class AccountPageModule { }
