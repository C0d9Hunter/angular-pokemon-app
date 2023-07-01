import {ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "./auth.service";
import {inject, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

class PermissionService{
    constructor(private authService:AuthService, private router:Router) {
    }

    canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
        if(this.authService.isLoggedIn){
            return true;
        }
        this.router.navigate(['/login'])
        return true;
    }
}


export const authGuard: CanActivateFn = (route, state) => {
  return inject(PermissionService).canActivate(route,state);
};