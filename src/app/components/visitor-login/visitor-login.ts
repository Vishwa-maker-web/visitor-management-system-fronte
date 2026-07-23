import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-visitor-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './visitor-login.html',
  styleUrl: './visitor-login.css'
})
export class VisitorLogin {

  email = '';

  login() {
    alert('Login feature coming next');
  }
}
