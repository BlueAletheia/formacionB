import { Component, Input, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { Usuario } from '../interfaces/UsuarioInterface';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  get usuarios() {
    return this.userService.usuarios;
  }

  constructor(private userService: UsuariosService) {}

  ngOnInit(): void {}

  eliminarUsuario(usuario: Usuario) {
    this.userService.borrarUsuarios(usuario);
  }
}
