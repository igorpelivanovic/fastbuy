import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMainAlertComponent } from './info-main-alert.component';

describe('InfoMainAlertComponent', () => {
  let component: InfoMainAlertComponent;
  let fixture: ComponentFixture<InfoMainAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoMainAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoMainAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
