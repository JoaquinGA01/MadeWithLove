import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponentComponent } from './components/filter-component/filter-component.component';
import { RouterLink } from '@angular/router';
import { PanelOffersComponent } from '../../Componentes/panel-offers/panel-offers.component';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [FilterComponentComponent, CommonModule, RouterLink, PanelOffersComponent],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent {

}
