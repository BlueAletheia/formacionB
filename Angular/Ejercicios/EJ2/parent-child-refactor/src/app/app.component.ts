import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  colorPadre: string = 'vacio';
  colorHijo: string = 'vacio';

  cambiarHijo(value: string) {
    this.colorHijo = value;
  }

  cambiarPadre(value: string) {
    this.colorPadre = value;
  }
}

