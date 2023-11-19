import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsavedChangeAlertComponent } from './unsaved-change-alert.component';

describe('UnsavedChangeAlertComponent', () => {
  let component: UnsavedChangeAlertComponent;
  let fixture: ComponentFixture<UnsavedChangeAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsavedChangeAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsavedChangeAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
