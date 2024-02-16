import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  activeView: string = 'details'; 


  changeView(view: string): void {
    this.activeView = view;
  }
}
