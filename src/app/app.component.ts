import { Component } from "@angular/core";
@Component({
  selector: "simple-root",
  template: `
    <simple-car-details #car></simple-car-details>
    <a href="#">Acquista ora una {{ car.car.model }}</a>
  `
})
export class AppComponent {}
