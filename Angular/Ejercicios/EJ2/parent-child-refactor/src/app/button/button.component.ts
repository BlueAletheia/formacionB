import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  color: string = 'blanco';

  constructor() {}

  ngOnInit(): void {}

  cambiarPadre(value: string) {
    console.log('truco', value);
  }
}