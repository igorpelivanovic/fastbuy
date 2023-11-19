import { TestBed } from '@angular/core/testing';

import { LoginUserGuardSingInGuard } from './login-user-guard-sing-in.guard';

describe('LoginUserGuardSingInGuard', () => {
  let guard: LoginUserGuardSingInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginUserGuardSingInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
