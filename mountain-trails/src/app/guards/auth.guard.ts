import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user/user.service';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const userService = inject(UserService);
  const router = inject(Router);
  const toastr = inject(ToastrService);

  if(userService.isLogged) {
    return true;
  }
  toastr.error('Please login first!');
  router.navigate(['/login']);
  return false;
};
