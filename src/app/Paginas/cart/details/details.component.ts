import { Component } from '@angular/core';
import { CartService } from '../../../Servicios/cart.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  constructor(private cartService: CartService) {}

  notifyChangeView(opcion: number) {
    this.cartService.changeView(opcion);
  }
}
