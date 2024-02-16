import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-in-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './log-in-register.component.html',
  styleUrl: './log-in-register.component.css'
})
export class LogInRegisterComponent {
  email = "";
  password = "";

  constructor(){}

  login() {
    console.log(this.email);
    console.log(this.password);
  }
}
