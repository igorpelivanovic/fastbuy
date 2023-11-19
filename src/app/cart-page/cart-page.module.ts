import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartPageRoutingModule } from './cart-page-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PipesModule } from '../pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';

import { CartPageComponent } from './cart-page.component';
import { CartSectionsComponent } from './cart-sections/cart-sections.component';
import { NoItemComponent } from './no-item/no-item.component';
import { ItemsListComponent } from './cart-sections/items-list/items-list.component';
import { AddressComponent } from './cart-sections/address/address.component';
import { OrderSummaryComponent } from './cart-sections/order-summary/order-summary.component';
import { LoaderModule } from '../loader/loader.module';
import { FormControlErrorMsgModule } from '../form-control-error-msg/form-control-error-msg.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    CartPageComponent,
    CartSectionsComponent,
    NoItemComponent,
    ItemsListComponent,
    AddressComponent,
    OrderSummaryComponent
  ],
  imports: [
    CommonModule,
    CartPageRoutingModule,
    FontAwesomeModule,
    PipesModule,
    ReactiveFormsModule,
    LoaderModule,
    FormControlErrorMsgModule,
    DirectivesModule
  ]
})
export class CartPageModule { }
