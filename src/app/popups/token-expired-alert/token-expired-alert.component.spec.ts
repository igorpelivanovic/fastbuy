import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenExpiredAlertComponent } from './token-expired-alert.component';

describe('TokenExpiredAlertComponent', () => {
  let component: TokenExpiredAlertComponent;
  let fixture: ComponentFixture<TokenExpiredAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenExpiredAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokenExpiredAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
