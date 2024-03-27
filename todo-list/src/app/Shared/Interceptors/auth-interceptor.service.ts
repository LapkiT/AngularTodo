import {inject, Injectable} from '@angular/core';
import { HttpInterceptor,
          HttpRequest,
          HttpHandler,
          HttpEvent }
  from '@angular/common/http';
import { Observable } from 'rxjs';
import {ServiceAuthService} from "../Services/auth-service/service-auth.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  authService = inject(ServiceAuthService);
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.authService.token;

    if (authToken) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`)
      });

      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
