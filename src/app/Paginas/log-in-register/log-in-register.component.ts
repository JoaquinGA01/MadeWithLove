import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

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

  login(data: NgForm) {
    console.log(data.value); // { first: '', last: '' }
    console.log(data.valid);
    console.log(data.value.email);
  }
}
