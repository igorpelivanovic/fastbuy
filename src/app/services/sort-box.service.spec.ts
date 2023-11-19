import { TestBed } from '@angular/core/testing';

import { SortBoxService } from './sort-box.service';

describe('SortBoxService', () => {
  let service: SortBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
