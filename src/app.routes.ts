import { authGuard } from "$lib/guards/auth.guard";
import { Route } from "@angular/router";

export default [
    {
        path: "",
        loadComponent: () => import("$pages/home/home.page").then((c) => c.HomePage),
    },
    {
        path: "login",
        loadComponent: () => import("$pages/login/login.page").then((c) => c.LoginPage),
    },
    {
        path: "profile",
        loadComponent: () => import("$pages/profile/profile.page").then((c) => c.ProfilePage),
        canActivate: [authGuard],
    },
] satisfies Route[];
