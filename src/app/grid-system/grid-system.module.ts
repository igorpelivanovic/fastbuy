import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FilterBoxModule } from "../filter-box/filter-box.module";
import { ItemPreviewModule } from '../item-preview/item-preview.module';
import { LoaderModule } from '../loader/loader.module';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';

import { GridSystemComponent } from './grid-system/grid-system.component';
import { SortBoxComponent } from './sort-box/sort-box.component';
import { NotFoundModule } from '../not-found/not-found.module';



@NgModule({
    declarations: [
        GridSystemComponent,
        SortBoxComponent,
    ],
    imports: [
        CommonModule,
        FilterBoxModule,
        FontAwesomeModule,
        ItemPreviewModule,
        ReactiveFormsModule,
        DirectivesModule,
        LoaderModule,
        PipesModule,
        NotFoundModule
    ],
    exports: [
        GridSystemComponent
    ]
})
export class GridSystemModule { }
