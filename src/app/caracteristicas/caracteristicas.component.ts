import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas',
  standalone: true,
  imports: [],
  templateUrl: './caracteristicas.component.html',
  styleUrl: './caracteristicas.component.css'
})
export class CaracteristicasComponent {
  @Output() caractSeguros = new EventEmitter<string>();

  agregaCaracteristicas(value: string) {
    this.caractSeguros.emit(value);
  }

}
