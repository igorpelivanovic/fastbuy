import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralFormTabComponent } from './general-form-tab.component';

describe('GeneralFormTabComponent', () => {
  let component: GeneralFormTabComponent;
  let fixture: ComponentFixture<GeneralFormTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralFormTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralFormTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
