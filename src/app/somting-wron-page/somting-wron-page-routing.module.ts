import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SomtingWronPageComponent } from './somting-wron-page.component';

const routes: Routes = [{ path: '', component: SomtingWronPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SomtingWronPageRoutingModule { }
