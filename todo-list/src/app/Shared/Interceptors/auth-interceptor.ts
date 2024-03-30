import {inject, Injectable} from '@angular/core';
import {
  HttpInterceptorFn
}
  from '@angular/common/http';
import {ServiceAuthService} from "../Services/auth-service/service-auth.service";

@Injectable()
export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(ServiceAuthService);

  const authToken = authService.token;

  if (authToken) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`)
    });

    return next(authReq);
  }
  return next(req);
}
