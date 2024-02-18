import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-product-page',
  standalone: true,
  imports: [],
  templateUrl: './detail-product-page.component.html',
  styleUrl: './detail-product-page.component.css'
})
export class DetailProductPageComponent {


  featuredImage: string = './assets/Imagenes-detail-product-page/pastel1.png'; // Set the default featured image
  setFeaturedImage(imageNumber: string): void {
    switch (imageNumber) {
      case 'image1':
        this.featuredImage = './assets/Imagenes-detail-product-page/pastel1.png';
        break;
      case 'image2':
        this.featuredImage = './assets/Imagenes-detail-product-page/pastel2.png';
        break;
      case 'image3':
        this.featuredImage = './assets/Imagenes-detail-product-page/pastel3.png';
        break;
      default:
        this.featuredImage = './assets/Imagenes-detail-product-page/pastel1.png';
    }
  }


  count: number = 1;

  increment() {
    this.count++;
  }

  decrement() {
    if (this.count > 1) {
      this.count--;
    }
  }

  addToCart() {
    console.log('Producto añadido al carrito:', this.count);
    // Aquí podrías añadir la lógica para añadir el producto al carrito
  }
}
