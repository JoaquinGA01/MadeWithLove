import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponentComponent } from './components/filter-component/filter-component.component';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [FilterComponentComponent, CommonModule],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent {

}
