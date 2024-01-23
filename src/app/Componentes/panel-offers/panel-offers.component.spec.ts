import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelOffersComponent } from './panel-offers.component';

describe('PanelOffersComponent', () => {
  let component: PanelOffersComponent;
  let fixture: ComponentFixture<PanelOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelOffersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
