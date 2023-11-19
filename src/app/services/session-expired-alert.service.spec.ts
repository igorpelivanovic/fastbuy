import { TestBed } from '@angular/core/testing';

import { SessionExpiredAlertService } from './session-expired-alert.service';

describe('SessionExpiredAlertService', () => {
  let service: SessionExpiredAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionExpiredAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
