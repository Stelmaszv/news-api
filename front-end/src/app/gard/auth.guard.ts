import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private AuthService:AuthService,private Router:Router){}
  canActivate():boolean {
    if(this.AuthService.ifAuth()){
      return true;
    }else{
      this.Router.navigate(['/login'])
      return false;
    }
  }
}
