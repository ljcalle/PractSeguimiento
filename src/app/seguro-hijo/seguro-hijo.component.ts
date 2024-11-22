import { Component, Input } from '@angular/core';
import { Seguros } from '../interfaces/seguros';
import { CaracteristicasComponent } from "../caracteristicas/caracteristicas.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seguro-hijo',
  standalone: true,
  imports: [CaracteristicasComponent, CommonModule, FormsModule],
  templateUrl: './seguro-hijo.component.html',
  styleUrl: './seguro-hijo.component.css'
})
export class SeguroHijoComponent {
  @Input() segEnLista: Seguros = {// Proporciona valores iniciales predeterminados            
    marca: '',
    modelo: '',
    matricula: '',
    poliza: 0
  };

  @Input() indice?: number

  arrayCaracteristicas = [''];
  agregarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }
}


