import { Component } from '@angular/core';
import { CarouselComponent } from '../../Componentes/carousel/carousel.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
