import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsMainContainerComponent } from './alerts-main-container.component';

describe('AlertsMainContainerComponent', () => {
  let component: AlertsMainContainerComponent;
  let fixture: ComponentFixture<AlertsMainContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertsMainContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertsMainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
