import { Component, Output, EventEmitter, Input } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  constructor() {}
  @Input() colorHijo: string = 'vacio';
  @Output() onCambiarPadre: EventEmitter<string> = new EventEmitter();

  cambiarPadre(value: string) {
    console.log('cambio al hijo', value);
    this.onCambiarPadre.emit(value);
  }
}
