import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletComponent} from './complet.component';

describe('PaymentComponent', () => {
  let component: CompletComponent;
  let fixture: ComponentFixture<CompletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
