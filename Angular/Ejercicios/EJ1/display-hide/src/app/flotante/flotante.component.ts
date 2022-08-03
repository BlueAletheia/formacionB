import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-flotante',
  templateUrl: './flotante.component.html',
  styleUrls: ['./flotante.component.css'],
})
export class FlotanteComponent {
  constructor() {}
  @Output() onCerrarVentana: EventEmitter<boolean> = new EventEmitter();

  cerrarVentana() {
    this.onCerrarVentana.emit(false);
  }
}
