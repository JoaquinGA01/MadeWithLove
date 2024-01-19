import { Component } from '@angular/core';
import { CarouselComponent } from '../../Componentes/carousel/carousel.component';
import { ProductButtonsMainpageComponent } from './components-main-page/product-buttons-mainpage/product-buttons-mainpage.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CarouselComponent, ProductButtonsMainpageComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
