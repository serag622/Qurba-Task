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
  ProductList : Product[] = []
  filter : ProductFilter = {skip: 0, limit:20}
  totalRecords !: number ;
  CategoryList !: string[]
  NumOfPages : number[] =[];
  currentPage :number = 0;
  SelectedCategoryProducts :Product[] =[]

  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    this.getProductList()
    this.getCategoryList()
    this.getSearchProduct()
  }


  /** get list of products*/
  getProductList(){
    this.isLoading = true;
    this.NumOfPages=[]
   this.productsService.getProductList(this.filter).subscribe((res : any) => {
    console.log(res)
    this.ProductList = res.products;
    this.totalRecords = res.total
    this.SetPages()
    this.isLoading = false;
   })
  }

  /** get list of categories*/
  getCategoryList(){
    this.isLoading = true;
  this.productsService.getCategoryList().subscribe((res : any) => {
    this.CategoryList = res;
    console.log(this.CategoryList)
  })
  }


  /** set number of pages*/
  SetPages(){
    this.NumOfPages=[]
    const numberofpages = Math.ceil(this.totalRecords / this.filter.limit)
    for(let i = 0; i < numberofpages; i++) {
      this.NumOfPages.push(i+1);
    }
  }

  onPagenation(i : number){
    if( i > -1 && i < this.NumOfPages.length ) {
      this.currentPage =i;
      this.filter.skip = this.filter.limit * i;
      this.getProductList();
    }
  }


 selectCategory(event :any){
   console.log(event.target.checked);
   console.log(event.target.value);

   if( event.target.checked){
    this.isLoading = true
    this.productsService.getProductByCategory(event.target.value).subscribe((result : any) =>{
       result?.products?.forEach((product : Product)=>{
        this.SelectedCategoryProducts.push(product)
       })
       this.ProductList = this.SelectedCategoryProducts;
       this.totalRecords = result?.total
       this.SetPages()
       this.isLoading = false
    })

   }
   else if(! event.target.checked){

    this.SelectedCategoryProducts = this.SelectedCategoryProducts.filter((p: Product )=>{console.log('ok'); return p.category != event.target.value;})

    if( this.SelectedCategoryProducts.length == 0 ){
      console.log('array 0')
      this.filter.skip =0;
      this.currentPage =0;
      this.getProductList()
    }
    else{
      this.isLoading = true
    console.log('new array')
    this.ProductList= this.SelectedCategoryProducts
    this.SetPages()
    this.isLoading= false
    }
  }

   }


   /************* if search button is clicked ****************/
   getSearchProduct(){
    this.productsService.search.subscribe(res=>{
      if(!res){
        this.getProductList()
      }
      else{
      this.isLoading=true
       this.productsService.searchProductByName(res).subscribe((result : any)=>{
        this.ProductList = result.products;
        this.totalRecords = result.total
        this.SetPages()
        this.isLoading = false;
       })
      }
    })
   }

 }


