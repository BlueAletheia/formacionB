import { Component } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './interfaces/UsuarioInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'form-exercise';

  constructor() {}
}
