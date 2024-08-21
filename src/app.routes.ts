import { authGuard } from '$lib/guards/auth.guard';
import { Route } from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () => import('$pages/home/page.component').then((c) => c.HomePage),
    },
    {
        path: 'login',
        loadComponent: () => import('$pages/login/page.component').then((c) => c.LoginPage),
    },
    {
        path: 'profile',
        loadComponent: () => import('$pages/profile/page.component').then((c) => c.ProfilePage),
        canActivate: [authGuard],
    },
] satisfies Route[];
