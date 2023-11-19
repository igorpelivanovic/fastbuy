import { TestBed } from '@angular/core/testing';

import { CanLeavePageGuard } from './can-leave-page.guard';

describe('CanLeavePageGuard', () => {
  let guard: CanLeavePageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanLeavePageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
