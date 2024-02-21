import { Component } from '@angular/core';
import { DetailsComponent } from './details/details.component';
import { CompletComponent } from './complet/complet.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { CartService } from '../../Servicios/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [DetailsComponent, CompletComponent, CartSummaryComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  views = [
    "cart",
    "details",
    "complet"
  ]
  activeViewCurrently = 0;
  activeView: String = this.views[this.activeViewCurrently]
  private subscription: Subscription;

  constructor(private cartService: CartService) {
    this.subscription = this.cartService.viewChange$.subscribe({
      next: (opcion: number) => {
        this.changeView(opcion);
      }
    });
  }

  changeView(opcion: number): void {
    this.activeViewCurrently += opcion;
    this.activeView = this.views[this.activeViewCurrently];
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
