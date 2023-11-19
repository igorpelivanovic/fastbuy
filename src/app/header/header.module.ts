import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderTopComponent } from './header-top/header-top.component';
import { HeaderBottomComponent } from './header-bottom/header-bottom.component';
import { MenuComponent } from './header-bottom/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderTopComponent,
    HeaderBottomComponent,
    MenuComponent,
    CategoriesComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DirectivesModule,
    PipesModule
  ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }
