import { TestBed } from '@angular/core/testing';

import { ShowListCartService } from './show-list-cart.service';

describe('ShowListCartService', () => {
  let service: ShowListCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowListCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
