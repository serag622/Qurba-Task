import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Service/auth/auth-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn : boolean ;
  search : string = '';
  cart : number = 0;

  constructor(private authService : AuthService) { }


  ngOnInit(): void {
    this.getLoggedIn()
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

  SearchItem(){

  }

}
