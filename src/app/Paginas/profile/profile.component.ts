import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsPanelComponent } from './options-panel/options-panel.component';
import { AddressesComponent } from './addresses/addresses.component';
import { HistoryComponent } from './history/history.component';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, OptionsPanelComponent, AddressesComponent, HistoryComponent, DetailsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  activeView: string = 'details'; 


  changeView(view: string): void {
    this.activeView = view;
  }
}
