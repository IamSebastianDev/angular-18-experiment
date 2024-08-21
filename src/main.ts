import { loggingInterceptor } from '$lib/interceptors/logging.interceptor';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withRouterConfig } from '@angular/router';
import { AppComponent } from './app.component';
import appRoutes from './app.routes';

bootstrapApplication(AppComponent, {
    providers: [
        // Remove ZoneJs as Change Detection method
        provideExperimentalZonelessChangeDetection(),

        // Provide the HttpClient application wide and add
        // necessary interceptors
        provideHttpClient(withInterceptors([loggingInterceptor]), withFetch()),

        // Provide the base router, which just imports the created app Routes
        // This enables separating out the App Routes. We can also
        // provide the Router config here
        provideRouter(appRoutes, withRouterConfig({ paramsInheritanceStrategy: 'always' })),
    ],
});
