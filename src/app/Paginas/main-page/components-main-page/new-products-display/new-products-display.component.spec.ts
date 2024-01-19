import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductsDisplayComponent } from './new-products-display.component';

describe('NewProductsDisplayComponent', () => {
  let component: NewProductsDisplayComponent;
  let fixture: ComponentFixture<NewProductsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewProductsDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewProductsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
