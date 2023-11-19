import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFormGroupComponent } from './address-form-group.component';

describe('AddressFormGroupComponent', () => {
  let component: AddressFormGroupComponent;
  let fixture: ComponentFixture<AddressFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressFormGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
