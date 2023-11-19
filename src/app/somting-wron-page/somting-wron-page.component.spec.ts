import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomtingWronPageComponent } from './somting-wron-page.component';

describe('SomtingWronPageComponent', () => {
  let component: SomtingWronPageComponent;
  let fixture: ComponentFixture<SomtingWronPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomtingWronPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomtingWronPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
