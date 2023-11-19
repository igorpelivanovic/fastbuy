import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFormTabComponent } from './address-form-tab.component';

describe('AddressFormTabComponent', () => {
  let component: AddressFormTabComponent;
  let fixture: ComponentFixture<AddressFormTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressFormTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressFormTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
