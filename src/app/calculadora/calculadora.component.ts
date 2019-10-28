import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  Campo1:number;
  Campo2:number;
  resultado:number;

  constructor() { }

  suma():void{
    this.resultado = this.Campo1 + this.Campo2;
  }

}
