import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSideAlertsComponent } from './info-side-alerts.component';

describe('InfoSideAlertsComponent', () => {
  let component: InfoSideAlertsComponent;
  let fixture: ComponentFixture<InfoSideAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSideAlertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoSideAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
