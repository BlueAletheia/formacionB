import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'display-hide';
  Mostrar: boolean = true;
  visible: boolean = true;

  onClick() {
    this.Mostrar = !this.Mostrar;
    this.visible = !this.visible;
  }
}
