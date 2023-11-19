import { TestBed } from '@angular/core/testing';

import { ComplitedAlertService } from './complited-alert.service';

describe('ComplitedAlertService', () => {
  let service: ComplitedAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplitedAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
