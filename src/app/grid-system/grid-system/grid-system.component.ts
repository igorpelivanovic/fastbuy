import { Component, Inject, Input, OnInit } from '@angular/core';
import { FilterBoxService } from 'src/app/services/filter-box.service';
import { faFilter, faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/interfaces/datas';
import { SortBoxService } from 'src/app/services/sort-box.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-grid-system',
  templateUrl: './grid-system.component.html',
  styleUrls: ['./grid-system.component.scss'],
})
export class GridSystemComponent implements OnInit {

  @Input("loading") isLoading !: boolean
  @Input("products") products !: Product[]

  private icons = {
    faFilter: faFilter,
    faChevronDown: faChevronDown,
    faXmark: faXmark
  }

  constructor(@Inject(DOCUMENT) private document: Document , private filterBoxService : FilterBoxService, private sortBoxService: SortBoxService) { }

  get filterBoxServ(){
    return this.filterBoxService
  }
  get sortBoxServ(){
    return this.sortBoxService
  }
  get icon(){
    return this.icons
  }

  ngOnInit(): void {
    console.log(this.products)
  }
  removeBrands():void{
    this.filterBoxService.removeBrands()
  }
  removePrice():void{
    this.filterBoxService.removePrice()
  }
  removeRating():void{
   this.filterBoxService.removeRating()
  }
  
  removeActiveFilterBox(val: any){
    this.filterBoxServ.showFilterBox = val
  }


}
