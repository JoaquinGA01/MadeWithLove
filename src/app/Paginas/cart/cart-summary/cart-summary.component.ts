import { Component } from '@angular/core';
import { CartComponent } from '../cart.component';
import { CartService } from '../../../Servicios/cart.service';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent{
  constructor(private cartService: CartService) {}

  notifyChangeView(opcion: number) {
    this.cartService.changeView(opcion);
  }
}
