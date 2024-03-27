import {ApplicationConfig} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {AuthInterceptorService} from "./Shared/Interceptors/auth-interceptor.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    AuthInterceptorService
  ],
};
