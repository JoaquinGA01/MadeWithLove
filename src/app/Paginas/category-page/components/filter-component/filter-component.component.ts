import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-component.component.html',
  styleUrl: './filter-component.component.css'
})
export class FilterComponentComponent {
  public secciones: { [key: string]: boolean } = {
    expandirArreglosFlorales: false,
    expandirPrecio: false,
    // ... otras secciones
  };
expandirPrecio: any;
expandirArreglosFlorales: any;

toggleSeccion(seccion: string) {
  // Primero se establece todas las secciones a false
  Object.keys(this.secciones).forEach(key => {
    this.secciones[key] = false;
  });
  
  // Luego se cambia el estado de la sección clickeada a true
  // si estaba cerrada, o se mantiene en false si ya estaba abierta
  if (this.secciones.hasOwnProperty(seccion)) {
    this.secciones[seccion] = !this.secciones[seccion];
  }
}
  
}
