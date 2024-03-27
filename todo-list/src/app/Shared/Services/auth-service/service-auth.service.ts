import { inject, Injectable} from '@angular/core';
import {catchError, map, Observable, of, tap} from "rxjs";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthResponse, logUser, regResponse, User} from "../../../intefaces/name";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class ServiceAuthService {
  private readonly JWT_TOKEN = 'jwt_token'
  public Registrashin = false;
  private loggedUser?: string;
  private router = inject(Router)
  private http = inject(HttpClient)

  public login(user: logUser): Observable<User | null> {
    return this.http.post<AuthResponse>(environment.backendOrigin + '/auth/login', user)
      .pipe(
        tap((res: AuthResponse) => {
          if (res && res.token) {
            localStorage.setItem('jwt_token', res.token)
          }
        }),
        map((res: AuthResponse): User => this.parseJwt(res.token)),
        catchError((): Observable<null> => {
          localStorage.removeItem('jwt_token');
          alert("Ошибка")
          return of(null);
        })
      );
  }

  public register(user: logUser): Observable<regResponse | null> {
    return this.http.post<regResponse>(environment.backendOrigin + '/auth/registration', user)
      .pipe(
        tap((res: regResponse) => {
          this.Registrashin = true;
          alert("Пользователь зарегистрирован");
        }),
        catchError((): Observable<null> => {
          localStorage.removeItem('jwt_token');
          alert("Ошибка")
          return of(null);
        })
      );
  }
  public get user(): User | null {
    const token = localStorage.getItem('jwt_token');
    if (token) {
      const user: User = this.parseJwt(token);
      return user;
    }
    return null;
  }

  public get token(): string | null {
    const token = localStorage.getItem('user_token');
    return token;
  }

  public logout(): void {
    this.loggedUser = undefined;
    localStorage.removeItem(this.JWT_TOKEN);
    this.router.navigate(['/login']);
  }

  private parseJwt(token: string): User {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }
}
