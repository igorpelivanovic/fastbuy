import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header/header.component';
import { LoginUserGuard } from './quards/login-user.guard';
import { AppName } from 'src/environments/environment';
import { CanLeavePageGuard } from './quards/can-leave-page.guard';
import { AccountPageComponent } from './account-page/account-page.component';
import { LoginUserGuardSingInGuard } from './quards/login-user-guard-sing-in.guard';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch:"full", title: AppName },
  { path: "", component: HeaderComponent, outlet: "header" },
  { path: "home", component: HomePageComponent,title: AppName },
  { path: 'search', loadChildren: () => import('./search-page/search-page.module').then(m => m.SearchPageModule) },
  { path: 'category/:name', loadChildren: () => import('./category-page/category-page.module').then(m => m.CategoryPageModule) },
  { path: 'product/:id', loadChildren: () => import('./product-page/product-page.module').then(m => m.ProductPageModule) },
  { path: 'whishlist', loadChildren: () => import('./whish-list-page/whish-list-page.module').then(m => m.WhishListPageModule), title: `Whish List - ${AppName}` },
  { path: 'cart', loadChildren: () => import('./cart-page/cart-page.module').then(m => m.CartPageModule), title: `Cart - ${AppName}`},
  { path: 'singin', canActivate: [LoginUserGuardSingInGuard], loadChildren: () => import('./singin-page/singin-page.module').then(m => m.SinginPageModule), title: `Sing in - ${AppName}` },
  { path: 'account', component: AccountPageComponent, canActivate: [LoginUserGuard], canDeactivate: [CanLeavePageGuard]  },
  { path: 'error', loadChildren: () => import('./somting-wron-page/somting-wron-page.module').then(m => m.SomtingWronPageModule), title: `Somting wrong - ${AppName}`  },
  { path: '**', redirectTo: "home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload", scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
