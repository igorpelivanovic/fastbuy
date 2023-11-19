import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsHeaderContainerComponent } from './alerts-header-container.component';

describe('AlertsHeaderContainerComponent', () => {
  let component: AlertsHeaderContainerComponent;
  let fixture: ComponentFixture<AlertsHeaderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertsHeaderContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertsHeaderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
