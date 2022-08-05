import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/UsuarioInterface';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  get usuarios() {
    return this.usuariosService.usuarios;
  }

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {}
}
