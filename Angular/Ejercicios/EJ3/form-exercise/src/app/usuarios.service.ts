import { Injectable } from '@angular/core';
import { Usuario } from './interfaces/UsuarioInterface';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private _usuarios: Usuario[] = [
    {
      nombre: 'Jose Luis',
      password: 'manolito32',
      correo: 'joseluisymanolito@gmail.com',
      suscrito: true,
      pais: 'España',
      ciudad: 'Salamanca',
    },
    {
      nombre: 'Maria Jose',
      password: 'martinayfelipe',
      correo: 'soymjose@gmail.com',
      suscrito: true,
      pais: 'España',
      ciudad: 'Galicia',
    },
    {
      nombre: 'Zinedine Zidane',
      password: 'zidyzidy',
      correo: 'zinedineZidane33@zidane.com',
      suscrito: false,
      pais: 'Francia',
      ciudad: 'Lyon',
    },
  ];

  get usuarios() {
    return [...this._usuarios];
  }

  constructor() {}

  agregarUsuario(newUser: Usuario) {
    this._usuarios.push(newUser);
  }
}
