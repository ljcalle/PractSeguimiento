import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Seguros } from './interfaces/seguros';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PractSeguimiento';
  seguros: Seguros[] = [
    { marca: "Ford", modelo: "Focus", matricula: "3497BSG", poliza: 51485 },
    { marca: "Toyota", modelo: "Yaris", matricula: "2497HSG", poliza: 2245 }
  ];

  incluirPoliza() {
    let nuevoSeguro: Seguros = {
      marca: this.cuadroMarca,
      modelo: this.cuadroModelo,
      matricula: this.cuadroMatricula,
      poliza: this.cuadroPoliza
    };

    this.seguros.push(nuevoSeguro);
  }

  cuadroMarca: string = "";
  cuadroModelo: string = "";
  cuadroMatricula: string = "";
  cuadroPoliza: number = 0;

}
