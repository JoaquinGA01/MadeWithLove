import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { User } from './user.model';
import { Address } from './address.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user: User | undefined;
  address: Address | undefined;
  activeView: string = 'details'; // 'details', 'addresses', etc.

  // constructor(private userService: UserService) {}

  // ngOnInit() {
  //   this.userService.getUser().subscribe(user => {
  //     this.user = user;
  //   });
  //   this.userService.getAddress().subscribe(address => {
  //     this.address = address;
  //   });
  // }

  changeView(view: string): void {
    this.activeView = view;
  }
}
