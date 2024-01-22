import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-products-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-products-display.component.html',
  styleUrl: './new-products-display.component.css'
})
export class NewProductsDisplayComponent {

  /*@ViewChild('productContainer') productContainer: Element;

  products = [
    // ... tus productos aquí
  ];

  scrollToProduct(index: number): void {
    const containerScrollWidth = this.productContainer.nativeElement.scrollWidth;
    const productWidth = containerScrollWidth / this.products.length;
    this.productContainer.nativeElement.scrollTo({
      left: productWidth * index,
      behavior: 'smooth'
    });
  }*/

}
