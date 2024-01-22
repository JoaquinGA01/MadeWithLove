import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSectionButtonsComponent } from './new-section-buttons.component';

describe('NewSectionButtonsComponent', () => {
  let component: NewSectionButtonsComponent;
  let fixture: ComponentFixture<NewSectionButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSectionButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewSectionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
