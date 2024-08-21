import { AuthService } from '$lib/services/auth.service';
import { inject } from '@angular/core';
import { RedirectCommand, Router, type CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (!authService.loggedIn()) {
        return new RedirectCommand(router.parseUrl('/login'));
    }

    return true;
};
