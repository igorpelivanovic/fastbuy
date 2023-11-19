import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhishListPageRoutingModule } from './whish-list-page-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { DirectivesModule } from '../directives/directives.module';

import { WhishListPageComponent } from './whish-list-page.component';


@NgModule({
  declarations: [
    WhishListPageComponent
  ],
  imports: [
    CommonModule,
    WhishListPageRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    PipesModule,
    DirectivesModule
  ]
})
export class WhishListPageModule { }
