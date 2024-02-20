import { Component } from '@angular/core';
import { CartComponent } from '../cart.component';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent {
  public changeView(opcion:number): void {
    cartComponent: CartComponent;
  }
}
