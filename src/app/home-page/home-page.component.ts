import { Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Product} from '../interfaces/datas';
import { Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  protected products : Product[] = []
  protected isLoading: boolean = false
  private skipData: number = 0
  private loadData: number = 10
  private dataServiceSubs !: Subscription
  private fullLoad : boolean = false 

  constructor(private dataService: DataService, @Inject(DOCUMENT) private document : Document, private route: ActivatedRoute, private router: Router) { }
  ngOnDestroy(): void {
    this.dataServiceSubs.unsubscribe()
  }

  ngOnInit(): void {
    this.getItems()
  }
  private getItems():void{
    if(this.isLoading || this.fullLoad) return
    this.isLoading = true
    this.dataServiceSubs = this.dataService.getProducts({limit: this.loadData, skip: this.skipData}).subscribe({
      next: (data)=>{
        this.products.push(...data.products)
        if(data.limit + data.skip == data.total) this.fullLoad = true
      },
      error: ()=>{
        this.isLoading = false
      },
      complete:()=>{
        this.isLoading = false
        this.skipData += this.loadData 
    }})
  }
  @HostListener("document:scroll", ['$event.target'])
  onScroll():void{
    if(this.document.documentElement.offsetHeight <= this.document.documentElement.scrollTop + this.document.documentElement.clientHeight + 80){
      this.getItems()
    }
  }


}
