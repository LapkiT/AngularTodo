import { CanActivateFn } from '@angular/router';

export const headerGuard: CanActivateFn = (route, state) => {
  function isHeaderGuard(): boolean {
    const token = localStorage.getItem('jwt_token');

    try {
      if (token && location.pathname == "/todo") {
         return false
      }
      return true;
    } catch (error) {
      console.error('Ошибка: ', error);
      return false;
    }
  }

  return isHeaderGuard();
};
