import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-buttons-mainpage',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-buttons-mainpage.component.html',
  styleUrl: './product-buttons-mainpage.component.css'
})
export class ProductButtonsMainpageComponent {

}
