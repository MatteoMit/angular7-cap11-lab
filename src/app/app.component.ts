import { Component } from "@angular/core";
@Component({
  selector: "simple-root",
  template: `
    <simple-car-details #car></simple-car-details>
    <a href="#">Acquista ora una {{ car.car.model }}</a>
  `
})
export class AppComponent {
  private conversionRate = 1.1379;
  usd = 0;

  convert(value: string) {
    this.usd = parseFloat(value) * this.conversionRate;
  }
}
