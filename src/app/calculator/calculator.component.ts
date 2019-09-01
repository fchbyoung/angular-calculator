import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  first: number;
  second: number;
  operator = '+';
  ouput: number;

  calculator() {
    switch (this.operator) {
      case '+': this.ouput = this.first + this.second;
                break;
      case '-': this.ouput = this.first - this.second;
                break;
      case '*': this.ouput = this.first * this.second;
                break;
      case '/': this.ouput = this.first / this.second;
                break;
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
