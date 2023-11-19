import { TestBed } from '@angular/core/testing';

import { HeaderModifyInterceptor } from './header-modify.interceptor';

describe('HeaderModifyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HeaderModifyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HeaderModifyInterceptor = TestBed.inject(HeaderModifyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
