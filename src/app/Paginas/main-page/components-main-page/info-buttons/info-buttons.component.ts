import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-info-buttons',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './info-buttons.component.html',
  styleUrl: './info-buttons.component.css'
})
export class InfoButtonsComponent {

}
