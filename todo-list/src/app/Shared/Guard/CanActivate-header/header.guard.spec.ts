import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { headerGuard } from './header.guard';

describe('headerGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => headerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
