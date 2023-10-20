import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AppService } from '../service/app-service.service';
import { Observable } from 'rxjs';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

export class AuthGuard implements CanActivate{
  constructor(private authServ: AppService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     
      if(this.authServ.isLoggedIn()){
        if(route.url.length > 0){
          let menu = route.url[0].path;

          if(menu == 'home'){
            if(this.authServ.getUserRole() === "ADMIN"){
              return true;

            }else{
              this.router.navigate(['']);
              return false;
            }

          }else{
            return true;
          }

        }else{
          return true;
        }

      }else{
        this.router.navigate([''])
        return false;
      }
  }
}
