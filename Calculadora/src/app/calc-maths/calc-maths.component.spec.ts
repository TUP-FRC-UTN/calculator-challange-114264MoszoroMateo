import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcMathsComponent } from './calc-maths.component';

describe('CalcMathsComponent', () => {
  let component: CalcMathsComponent;
  let fixture: ComponentFixture<CalcMathsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcMathsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcMathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
