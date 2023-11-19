import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { FilterBoxModule } from './filter-box/filter-box.module';
import { ItemPreviewModule } from './item-preview/item-preview.module';
import { HomePageModule } from './home-page/home-page.module';
import { ErrorHandleInterceptor } from './interceptors/error-handle.interceptor';

import { AppInitService } from './services/app-init.service';
import { HeaderModifyInterceptor } from './interceptors/header-modify.interceptor';
import { AlertsModule } from './alerts/alerts.module';
import { AccountPageModule } from './account-page/account-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HomePageModule,
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HttpClientModule,
    FilterBoxModule,
    ItemPreviewModule,
    ReactiveFormsModule,
    FooterModule,
    AlertsModule,
    AccountPageModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (appinit: AppInitService)=>{
        return ()=> appinit.init()
      },
      deps: [AppInitService],
      multi: true
    }, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderModifyInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandleInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
