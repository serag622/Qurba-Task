import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/product/Product.model';
import { AuthService } from '../../Service/auth/auth-services.service';
import { CartService } from '../../Service/Cart/Cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn : boolean ;
  search : string = '';
  cart : Product[] = [];

  constructor(private authService : AuthService, private cartService : CartService) { }


  ngOnInit(): void {
    this.getLoggedIn()
    this.getCartItems()
  }

  /************ get is user is logged in ****************/
  getLoggedIn(){
    this.authService.getIsLoggedIn().subscribe(response => {
      console.log(response)
      this.isLoggedIn = response
    })
  }


  /************ get user to log out ****************/
  LogOut(){
    this.authService.logout()
  }

  /************ get user to log out ****************/
  getCartItems(){
    this.cartService.AddToCart.subscribe(response => {
      this.cart.push(response)
    })
  }


  SearchItem(){

  }

}
