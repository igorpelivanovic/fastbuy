import { TestBed } from '@angular/core/testing';

import { UnsavedChangeAlertService } from './unsaved-change-alert.service';

describe('UnsavedChangeAlertService', () => {
  let service: UnsavedChangeAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsavedChangeAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
