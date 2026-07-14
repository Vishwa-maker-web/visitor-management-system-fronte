import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css',
})
export class AdminLogin {
  username = '';
password = '';
    constructor(private router: Router)
{}

    login() {
  if (this.username === 'admin' && this.password === 'admin123') {
    this.router.navigate(['/dashboard']);
  } else {
    alert('Invalid Username or Password');
  }
}
}
