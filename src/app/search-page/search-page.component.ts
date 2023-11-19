import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
import { Product } from '../interfaces/datas';
import { FilterBoxService } from '../services/filter-box.service';
import { DOCUMENT } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { AppName } from 'src/environments/environment';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  providers: [FilterBoxService]
})
export class SearchPageComponent implements OnInit {

  protected searchValue: string = ""
  private productsSubscription !: Subscription
  protected loading : boolean = false
  private products: Product[] = []
  private limit: number = 10
  private fullLoad : boolean = false
  private isError: boolean = false

  constructor(@Inject(DOCUMENT) private document : Document, private route: ActivatedRoute, private router: Router, private dataService: DataService, private filterBoxService: FilterBoxService, private title: Title) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(data=>{
      if(!data.get("q")){
        this.router.navigate(["home"])
        return
      }
      this.searchValue = data.get("q") || ""
      this.getData()
      this.title.setTitle(`${this.searchValue} - ${AppName}`)
    })
  }
  getData(){
    if(this.loading || this.fullLoad) return
    this.loading = true
    this.productsSubscription = this.dataService.getProductsFromSearch({q: this.searchValue, limit: this.limit}).subscribe({
      next: (data)=>{
        this.products.push(...data.products)
        if(data.limit+data.skip == data.total) this.fullLoad = true
      },
      error: (err: HttpErrorResponse)=>{
        console.log(err)
      },
      complete: ()=>{
        this.loading = false
        this.filterBoxService.updateOptions(this.products)
      }
    })
  }
  @HostListener("document:scroll", ['$event.target'])
  onScroll():void{
    if(this.document.documentElement.offsetHeight <= this.document.documentElement.scrollTop + this.document.documentElement.clientHeight + 80){
      this.getData()
    }
  }

  get productsList(): Product[]{
    return this.products
  }
  get isErrorRequest(): boolean{
    return this.isError
  }

}
