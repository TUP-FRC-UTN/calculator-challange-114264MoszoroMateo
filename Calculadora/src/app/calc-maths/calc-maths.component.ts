import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calc-maths',
  standalone: true,
  imports: [],
  templateUrl: './calc-maths.component.html',
  styleUrl: './calc-maths.component.css'
})
export class CalcMathsComponent {
  @Input() valor1: number = 0
  @Input() valor2: number = 0
  res:number = 0
  @Output() resultado = new EventEmitter<number>()
  @Output() limpiarCampos = new EventEmitter<void>()

  sum(){
    this.res = this.valor1 + this.valor2
    this.resultado.emit(this.res)
    console.log(this.res)
  }
  sub(){
    this.res = this.valor1 - this.valor2
    this.resultado.emit(this.res)
    console.log(this.res)
  }
  pot(){
    this.res = Math.pow(this.valor1,this.valor2)
    this.resultado.emit(this.res)
    console.log(this.res)
  }
  mult(){
    this.res = this.valor1 * this.valor2
    this.resultado.emit(this.res)
    console.log(this.res)
  }
  div(){
    this.res = this.valor1 / this.valor2
    this.resultado.emit(this.res)
    console.log(this.res)
  }
  clean(){
    this.limpiarCampos.emit()
  }
}
