import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  function isAuthenticatedAndAuthorized(): boolean {
    const token = localStorage.getItem('jwt_token');
    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const isExpired = payload.exp * 1000 < Date.now();
      if (isExpired) return false;


      const hasAdminRole = payload.roles.some((role:{name: string}) => role.name === 'ADMIN' || role.name === 'USER');
      return hasAdminRole;
    } catch (error) {
      console.error('Ошибка при разборе JWT:', error);
      return false;
    }
  }

  return isAuthenticatedAndAuthorized();
};
