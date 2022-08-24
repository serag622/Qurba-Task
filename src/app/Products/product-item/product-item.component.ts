import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Shared/Models/product/Product.model';
import { CartService } from 'src/app/Shared/Service/Cart/Cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;


  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
  }

  AddToCart(){
    this.cartservice.AddItemToCart(this.product)
  }

}
