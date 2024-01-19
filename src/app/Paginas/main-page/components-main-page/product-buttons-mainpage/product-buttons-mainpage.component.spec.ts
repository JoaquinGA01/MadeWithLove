import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductButtonsMainpageComponent } from './product-buttons-mainpage.component';

describe('ProductButtonsMainpageComponent', () => {
  let component: ProductButtonsMainpageComponent;
  let fixture: ComponentFixture<ProductButtonsMainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductButtonsMainpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductButtonsMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
