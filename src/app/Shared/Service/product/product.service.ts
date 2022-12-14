import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../../environments/environment.prod";
import { ApiRoutes } from "../../Models/app/ApiRoutes";
import { ProductFilter } from '../../Models/product/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = environment.apiUrl;
  search = new EventEmitter<string>();


  constructor(private http: HttpClient) { }

  getProductList(filter : ProductFilter){
    return this.http.get(this.apiUrl+ApiRoutes.product.list+'?limit='+filter.limit+'&skip='+filter.skip)
  }

  getCategoryList(){
    return this.http.get(this.apiUrl+ApiRoutes.product.categories)
  }

  getProductByCategory(category :string){
    return this.http.get(this.apiUrl+ApiRoutes.product.productByCategory+category)
  }

  searchProductByName(name :string){
   return this.http.get(this.apiUrl+ApiRoutes.product.search+name)
  }
}
