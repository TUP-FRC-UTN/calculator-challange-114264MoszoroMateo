import { Component } from '@angular/core';
import { CalcMathsComponent } from '../calc-maths/calc-maths.component';

@Component({
  selector: 'app-calculator-view',
  standalone: true,
  imports: [CalcMathsComponent],
  templateUrl: './calculator-view.component.html',
  styleUrl: './calculator-view.component.css'
})
export class CalculatorViewComponent {

}
