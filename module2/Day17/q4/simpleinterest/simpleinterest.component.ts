import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleinterest',
  templateUrl: './simpleinterest.component.html',
  styleUrls: ['./simpleinterest.component.css']
})
export class SimpleinterestComponent {
  principal_amount:number = 0;
  annual_interest_rate:number = 0;
  period:number = 0;
  final:number = 0;

  public calculate_click():void
  {
    this.final = ((this.principal_amount * this.annual_interest_rate * this.period)/100) + this.principal_amount;
  }
}
