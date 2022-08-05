import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/UsuarioInterface';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  newUser: Usuario = {
    nombre: '',
    password: '',
    correo: '',
    suscrito: false,
    pais: '',
    ciudad: '',
  };

  constructor(private userService: UsuariosService) {}

  agregarNuevoUsuario() {
    this.userService.agregarUsuario(this.newUser);
    this.newUser = {
      nombre: '',
      password: '',
      correo: '',
      suscrito: false,
      pais: '',
      ciudad: '',
    };
  }

  ngOnInit(): void {}
}
