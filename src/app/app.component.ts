import { Component, ViewChild, ElementRef } from "@angular/core"; 
//1;
@Component({
  selector: "simple-root",
  template: `
    <!-- 2: Applichiamo #eur -->
    <input type="text" placeholder="Inserisci il valore in euro" #eur />
    <button (click)="convert()">Converti</button>

    <!-- 3: Applichiamo #conversionRate -->
    <p>Tasso di conversione EUR/USD 
      <span #conversionRate>1.1379</span>
    </p>
    <br />
    {{ usd | currency }}
  `
})
export class AppComponent {
  // 4 Utilizziamo il decoratore @ViewChild
  @ViewChild("eur",{static: false}) eurInputField: ElementRef;
  @ViewChild("conversionRate",{static: false}) conversionRate: ElementRef;
  usd = 0;
  convert() {
    const eur = parseFloat(this.eurInputField.nativeElement.value);
    const conversionRate = parseFloat(
      this.conversionRate.nativeElement.textContent
    );
    if (eur) {
      this.usd = eur * conversionRate;
    }
  }
}
