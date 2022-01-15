import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MainService } from '../services/main.service';

@Injectable({
  providedIn: 'root'
})
export class ProductorGuard implements CanActivate {
  constructor(private mainService: MainService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return <Observable<boolean>>this.mainService.checkSesion(true).pipe(map((value: any) => {
      if (value != true) {
        this.router.navigate(['login'])
        return false
      }
      else {
        return true
      }
    }))
  }

}
