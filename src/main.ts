import { bootstrapApplication } from "@angular/platform-browser";
import { provideExperimentalZonelessChangeDetection } from "@angular/core";
import { provideRouter, withRouterConfig } from "@angular/router";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { loggingInterceptor } from "$lib/interceptors/logging.interceptor";
import { AppComponent } from "./app.component";
import appRoutes from "./app.routes";

bootstrapApplication(AppComponent, {
    providers: [
        // Remove ZoneJs as Change Detection method
        provideExperimentalZonelessChangeDetection(),

        // Provide the HttpClient application wide and add
        // necessary interceptors
        provideHttpClient(withInterceptors([loggingInterceptor])),

        // Provide the base router, which just imports the created app Routes
        // This enables separating out the App Routes. We can also
        // provide the Router config here
        provideRouter(appRoutes, withRouterConfig({ paramsInheritanceStrategy: "always" })),
    ],
});
