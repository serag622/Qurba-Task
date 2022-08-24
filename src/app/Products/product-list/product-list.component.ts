import { Component, OnInit } from '@angular/core';
import { Product, ProductFilter } from 'src/app/Shared/Models/product/Product.model';
import { ProductService } from 'src/app/Shared/Service/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  isLoading : boolean = false;
  ProductList !: Product[]
  filter : ProductFilter = {skip: 0, limit:20}
  totalRecords !: number;
  CategoryList !: string[]

  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    this.getProductList()
    this.getCategoryList()
  }


  /** get list of products*/
  getProductList(){
    this.isLoading = true;
   this.productsService.getProductList(this.filter).subscribe((res : any) => {
    console.log(res)
    this.ProductList = res.products;
    this.totalRecords = res.total
    this.isLoading = false;
   })
  }

  getCategoryList(){
    this.isLoading = true;
  this.productsService.getCategoryList().subscribe((res : any) => {
    this.CategoryList = res;
    console.log(this.CategoryList)
  })
  }

}
