import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { ToastrService } from 'ngx-toastr';

export const userGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);
  const toastr = inject(ToastrService);

  if(!userService.isLogged) {
    toastr.error('You are already logged!');
    router.navigate(['/home']);
    
    return false;
  }

  return true;
};
