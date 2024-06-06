import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryCalculatorComponent } from './story-calculator.component';

describe('StoryCalculatorComponent', () => {
  let component: StoryCalculatorComponent;
  let fixture: ComponentFixture<StoryCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoryCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
