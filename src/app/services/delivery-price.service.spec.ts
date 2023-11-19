import { TestBed } from '@angular/core/testing';

import { DeliveryPriceService } from './delivery-price.service';

describe('DeliveryPriceService', () => {
  let service: DeliveryPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
