import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoButtonsComponent } from './info-buttons.component';

describe('InfoButtonsComponent', () => {
  let component: InfoButtonsComponent;
  let fixture: ComponentFixture<InfoButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
