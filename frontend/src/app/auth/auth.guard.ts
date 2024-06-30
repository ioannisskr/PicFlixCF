import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import {
  CanActivateFn,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | Promise<boolean> | Observable<boolean> => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isAuth = authService.getIsAuth();
  if (!isAuth) {
    router.navigate(['/auth/login']);
  }
  return isAuth;
};
