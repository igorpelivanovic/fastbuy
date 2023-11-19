import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiveBrandPipe } from './active-brand.pipe';
import { CarouselPipe } from './carousel.pipe';
import { DiscountPercentagePipe } from './discount-percentage.pipe';
import { FiltringDataPipe } from './filtring-data.pipe';
import { RatingValuePipe } from './rating-value.pipe';
import { WhishlistBtnPipe } from './whishlist-btn.pipe';
import { CartCountPipe } from './cart-count.pipe';
import { QuanityTotalCostPipe } from './quanity-total-cost.pipe';
import { SalesTaxPipe } from './sales-tax.pipe';
import { InitialsPipe } from './initials.pipe';
import { FormatStringPipe } from './format-string.pipe';
import { FormatAddressPipe } from './format-address.pipe';

@NgModule({
  declarations: [
    ActiveBrandPipe,
    CarouselPipe,
    DiscountPercentagePipe,
    FiltringDataPipe,
    RatingValuePipe,
    WhishlistBtnPipe,
    CartCountPipe,
    QuanityTotalCostPipe,
    SalesTaxPipe,
    InitialsPipe,
    FormatStringPipe,
    FormatAddressPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ActiveBrandPipe, 
    CarouselPipe, 
    DiscountPercentagePipe, 
    FiltringDataPipe, 
    RatingValuePipe, 
    WhishlistBtnPipe, 
    CartCountPipe, 
    QuanityTotalCostPipe,
    SalesTaxPipe,
    InitialsPipe,
    FormatStringPipe,
    FormatAddressPipe
  ]
})
export class PipesModule { }
