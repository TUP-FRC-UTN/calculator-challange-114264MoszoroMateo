import { Component, input } from '@angular/core';
import { CalcMathsComponent } from '../calc-maths/calc-maths.component';

@Component({
  selector: 'app-calculator-view',
  standalone: true,
  imports: [CalcMathsComponent],
  templateUrl: './calculator-view.component.html',
  styleUrl: './calculator-view.component.css'
})
export class CalculatorViewComponent {
  valor1: number = 0
  valor2: number = 0
  resultado:string = ''
  cargarValor1(valor:any){
    this.valor1 = parseInt(valor.target.value)
    console.log(this.valor1)
  }
  cargarValor2(valor:any){
    this.valor2 = parseInt(valor.target.value)
    console.log(this.valor2)
  }

  calcular(res:number){
    this.resultado=res.toLocaleString()
  }
  limpiar(){
    this.valor1 = 0;
    this.valor2 = 0;
    this.resultado = '';
  }

}
