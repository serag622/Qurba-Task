import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../Service/auth/auth-services.service';


@Injectable({
   providedIn: 'root'
})


export class UnauthGuard implements CanActivate {

   constructor(
      private authService: AuthService,
      private router: Router) { }

   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (!this.authService.getIsLoggedIn().value) { return true; }
      this.router.navigate(['']);
      return false;
   }

}
