import { TestBed } from '@angular/core/testing';

import { InfoAlertService } from './info-alert.service';

describe('AlertService', () => {
  let service: InfoAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
