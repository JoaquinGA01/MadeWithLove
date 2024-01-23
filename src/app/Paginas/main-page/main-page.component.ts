import { Component } from '@angular/core';
import { CarouselComponent } from '../../Componentes/carousel/carousel.component';
import { ProductButtonsMainpageComponent } from './components-main-page/product-buttons-mainpage/product-buttons-mainpage.component';
import { NewSectionButtonsComponent } from './components-main-page/new-section-buttons/new-section-buttons.component';
import { InfoButtonsComponent } from './components-main-page/info-buttons/info-buttons.component';
import { NewProductsDisplayComponent } from './components-main-page/new-products-display/new-products-display.component';
import { PanelOffersComponent } from '../../Componentes/panel-offers/panel-offers.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CarouselComponent, PanelOffersComponent, ProductButtonsMainpageComponent, NewSectionButtonsComponent, InfoButtonsComponent, NewProductsDisplayComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
