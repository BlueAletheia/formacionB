import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'display-hide';
  mostrar: boolean = false;

  onClick() {
    this.mostrar = !this.mostrar;
  }

  cerrarVentana() {
    this.mostrar = false;
  }
}
