import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralFormGroupComponent } from './general-form-group.component';

describe('GeneralFormGroupComponent', () => {
  let component: GeneralFormGroupComponent;
  let fixture: ComponentFixture<GeneralFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralFormGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
