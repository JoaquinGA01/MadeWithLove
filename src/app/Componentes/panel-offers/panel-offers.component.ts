import { Component } from '@angular/core';

@Component({
  selector: 'app-panel-offers',
  standalone: true,
  imports: [],
  templateUrl: './panel-offers.component.html',
  styleUrl: './panel-offers.component.css'
})
export class PanelOffersComponent {
  subscribe(email: string): void {
    console.log(email); // Implementar lógica de suscripción
  }
}
