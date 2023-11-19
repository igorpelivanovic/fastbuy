import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSectionsComponent } from './cart-sections.component';

describe('CartSectionsComponent', () => {
  let component: CartSectionsComponent;
  let fixture: ComponentFixture<CartSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartSectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
