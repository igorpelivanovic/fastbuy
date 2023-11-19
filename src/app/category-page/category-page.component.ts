import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Product } from '../interfaces/datas';
import { FilterBoxService } from '../services/filter-box.service';
import { Title } from '@angular/platform-browser';
import { AppName } from 'src/environments/environment';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
  providers: [FilterBoxService]
})
export class CategoryPageComponent implements OnInit {

  private products : Product[] = []  
  protected loading : boolean = false
  protected titleValue!: string
  private isError: boolean = false 

  constructor(private route: ActivatedRoute, private dataService: DataService, private filterBoxService: FilterBoxService, private title: Title) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.titleValue = params['name']
      this.getData(this.titleValue)
      this.title.setTitle(`${this.titleValue.slice(0, 1).toUpperCase()}${this.titleValue.slice(1)} - ${AppName}`)
    })
  }
  get productsList(){
    return this.products
  }

  get isErrorRequest(): boolean{
    return this.isError
  }

  getData(param:string){
    if(this.loading) return
    this.loading = true
    this.dataService.getProductsFromCategory(param).subscribe({
      next: (data)=>{
        this.products.push(...data.products)
      },
      error: (err: HttpErrorResponse)=>{
          if(err.status == 404){
            this.isError = true
          }
      },
      complete: ()=>{
        this.loading = false
        this.filterBoxService.updateOptions(this.products)
      }
    })
  }

}
