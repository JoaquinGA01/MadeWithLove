import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Componentes/header/header.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { MainPageComponent } from './Paginas/main-page/main-page.component';
import { ProfileComponent } from './Paginas/profile/profile.component';
import { ShoppingBagPageComponent } from './Paginas/shopping-bag-page/shopping-bag-page.component';
import { DetailProductPageComponent } from './Paginas/detail-product-page/detail-product-page.component';
import { CategoryPageComponent } from './Paginas/category-page/category-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, MainPageComponent, ProfileComponent, 
    ShoppingBagPageComponent, DetailProductPageComponent, CategoryPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MadeWithLove';
}
