import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;

  // }

  constructor(private auth : AuthService , private router: Router){}
  canActivate(): boolean {
    if (this.auth.isLogedIn) {
      return true;
    } else {
      this.router.navigate(['']); // Redirect to the login page if not logged in
      return false;
    }

    if(this.auth.isAdmin){
      return true;
    }else{
      this.router.navigate(['']); // Redirect to the login page if not logged in
      return false;
    }

  }

  
}
