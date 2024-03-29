import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInRegisterComponent } from './log-in-register.component';

describe('LogInRegisterComponent', () => {
  let component: LogInRegisterComponent;
  let fixture: ComponentFixture<LogInRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogInRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogInRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
