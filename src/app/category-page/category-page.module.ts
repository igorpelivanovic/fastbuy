import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageRoutingModule } from './category-page-routing.module';
import { FilterBoxModule } from "../filter-box/filter-box.module";
import { GridSystemModule } from '../grid-system/grid-system.module';

import { CategoryPageComponent } from './category-page.component';
import { NotFoundModule } from '../not-found/not-found.module';



@NgModule({
    declarations: [
        CategoryPageComponent,
    ],
    imports: [
        CommonModule,
        CategoryPageRoutingModule,
        FilterBoxModule,
        GridSystemModule,
        NotFoundModule
    ]
})
export class CategoryPageModule { }
