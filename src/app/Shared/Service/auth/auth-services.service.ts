import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../../environments/environment.prod";
import { ApiRoutes } from "../../Models/app/ApiRoutes";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { AppRoutes } from "../../Models/app/AppRoutes";
import { Router } from '@angular/router';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;
  isLoggedIn = new BehaviorSubject<boolean>(this.isTokenAvailable());


  constructor(private http: HttpClient, private router: Router) { }



  UserLogin(data : any){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
     });
   let options = { headers: headers };

    return this.http.post(this.apiUrl+ApiRoutes.login,data,options).pipe(tap((response: any) => {
      console.log(response)
      if(response){
        localStorage.setItem('token', response.token);
        this.setIsLoggedIn(true);
        this.router.navigate([AppRoutes.Product.full]);
      }
    }))



    // return this.http.post('https://dummyjson.com/auth/login',data,options)

  }

  async logout(): Promise<any> {
    await localStorage.removeItem('token');
    this.setIsLoggedIn(false);
    await this.router.navigate([AppRoutes.Authentication.login.full]);
  }


  private isTokenAvailable(): boolean {
    return !!localStorage.getItem("token");
  }

  setIsLoggedIn(isLoggedIn: boolean): void {
    this.isLoggedIn.next(isLoggedIn);
  }

  getIsLoggedIn(): BehaviorSubject<boolean> {
    return this.isLoggedIn;
  }

}
