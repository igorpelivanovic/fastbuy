import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormTabComponent } from './contact-form-tab.component';

describe('ContactFormTabComponent', () => {
  let component: ContactFormTabComponent;
  let fixture: ComponentFixture<ContactFormTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFormTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
