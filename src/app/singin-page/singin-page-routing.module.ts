import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinginPageComponent } from './singin-page.component';

const routes: Routes = [{ path: '', component: SinginPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SinginPageRoutingModule { }
