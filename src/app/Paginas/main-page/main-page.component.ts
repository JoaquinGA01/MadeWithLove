import { Component } from '@angular/core';
import { CarouselComponent } from '../../Componentes/carousel/carousel.component';
import { ProductButtonsMainpageComponent } from './components-main-page/product-buttons-mainpage/product-buttons-mainpage.component';
import { NewSectionButtonsComponent } from './components-main-page/new-section-buttons/new-section-buttons.component';
import { InfoButtonsComponent } from './components-main-page/info-buttons/info-buttons.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CarouselComponent, ProductButtonsMainpageComponent, NewSectionButtonsComponent, InfoButtonsComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
