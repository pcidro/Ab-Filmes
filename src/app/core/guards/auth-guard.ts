import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UserTokenStore } from '../services/user-token-store';
import { UserApi } from '../services/user-api';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): MaybeAsync<GuardResult> => {
  const userTokenStore = inject(UserTokenStore);
  const userApi = inject(UserApi);
  const router = inject(Router);
  const HAS_TOKEN = userTokenStore.hasToken();

  const loginRoute = router.createUrlTree(['/auth/login']);

  if (!HAS_TOKEN) return loginRoute;

  return userApi.validateToken().pipe(
    map(() => true),
    catchError(() => {
      userTokenStore.removeToken();
      return of(loginRoute);
    }),
  );
};
