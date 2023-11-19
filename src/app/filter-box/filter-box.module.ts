import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBoxComponent } from './filter-box/filter-box.component';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { checkRangeValMinDirective, checkRangeValMaxDirective } from '../directives/click-outside.directive';
import { ItemPreviewModule } from "../item-preview/item-preview.module";
import { RatingModule } from '../rating/rating.module';

@NgModule({
    declarations: [
        FilterBoxComponent,
        checkRangeValMinDirective,
        checkRangeValMaxDirective,
    ],
    exports: [FilterBoxComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        FontAwesomeModule,
        ItemPreviewModule,
        RatingModule
    ]
})
export class FilterBoxModule { }
