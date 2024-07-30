import { HttpClient, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Comments, Product, Products } from '../interfaces/datas';
import { CategoryOfProducts } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
}) 
export class DataService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<CategoryOfProducts[]>{
    return this.http.get<CategoryOfProducts[]>(`${baseUrl}/products/categories`)
  }
  getProducts(params: any ): Observable<Products>{
    const paramsHttp: HttpParamsOptions = {fromObject: params} as HttpParamsOptions
    return this.http.get<Products>(`${baseUrl}/products`, {
      params: new HttpParams(paramsHttp)
    })
  }
  getProductsFromCategory(category: string): Observable<Products>{
    return this.http.get<Products>(`${baseUrl}/products/category/${category}`)
  }
  getProductsFromSearch(params: any):Observable<Products>{
    const paramsHttp: HttpParamsOptions = {fromObject: params} as HttpParamsOptions
    return this.http.get<Products>(`${baseUrl}/products/search`, {
      params: new HttpParams(paramsHttp)
    })
  }
  getSingleProduct(param: string): Observable<Product>{
    return this.http.get<Product>(`${baseUrl}/products/${param}`)
  }
  getComments(param: string, skip: any): Observable<Comments>{
    const paramsHttp : HttpParamsOptions = {fromObject : skip} as HttpParamsOptions 
    return this.http.get<Comments>(`${baseUrl}/comments/post/${param}`, {
      params: new HttpParams(paramsHttp)
    })
  }
}
