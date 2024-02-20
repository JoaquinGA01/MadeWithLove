import { Component } from '@angular/core';
import { DetailsComponent } from './details/details.component';
import { CompletComponent} from './complet/complet.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [DetailsComponent, CompletComponent, CartSummaryComponent ,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  views=[
    "cart",
    "details",
    "complet"
  ]
  activeViewCurrently = 0; 
  activeView: String = this.views[this.activeViewCurrently] 

  changeView(opcion:number): void {
    this.activeViewCurrently+=opcion;
    this.activeView=this.views[this.activeViewCurrently];
  }

}
