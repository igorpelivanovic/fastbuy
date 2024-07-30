import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { lastValueFrom} from 'rxjs';
import { CategoryOfProducts } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  private categories : CategoryOfProducts[] = []

  constructor(private datas: DataService) { }

  async init(){
    const data = await lastValueFrom(this.datas.getCategories());
    return this.categories = data;
  }
  get categoriesList(){
    return this.categories.sort()
  }
}
