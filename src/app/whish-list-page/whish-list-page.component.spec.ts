import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhishListPageComponent } from './whish-list-page.component';

describe('WhishListPageComponent', () => {
  let component: WhishListPageComponent;
  let fixture: ComponentFixture<WhishListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhishListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhishListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
