import { Component } from "@angular/core";
@Component({
  selector: "simple-root",
  template: `
    <input type="text" 
      placeholder="Inserisci il valore in euro" #money />
    
    <!-- accediamo al valore del campo input attraverso -->
    <!-- la Template reference variable #money -->

    <button (click)="convert(money.value)">Converti</button>
    <br>
      {{ usd | currency }}
  `
})
export class AppComponent {
  private conversionRate = 1.1379;
  usd = 0;
  
  convert(value: string) {
    this.usd = parseFloat(value) * this.conversionRate;
  }
}
