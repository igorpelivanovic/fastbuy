import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhishListPageComponent } from './whish-list-page.component';

const routes: Routes = [{ path: '', component: WhishListPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhishListPageRoutingModule { }
