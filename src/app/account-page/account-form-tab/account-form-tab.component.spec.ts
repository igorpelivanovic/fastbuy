import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFormTabComponent } from './account-form-tab.component';

describe('AccountFormTabComponent', () => {
  let component: AccountFormTabComponent;
  let fixture: ComponentFixture<AccountFormTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountFormTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountFormTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
