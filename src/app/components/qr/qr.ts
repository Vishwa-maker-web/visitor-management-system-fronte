 import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-qr',
  standalone: true,
    imports: [CommonModule, FormsModule],
  templateUrl: './qr.html',
  styleUrls: ['./qr.css']
})
export class Qr implements OnInit {
  

  qrPath = '';

  ngOnInit() {
    this.qrPath = localStorage.getItem('qrPath') || '';
    console.log(this.qrPath);
  }

   message = '';
  email = localStorage.getItem('email') || '';
private router = inject(Router);
private http = inject(HttpClient);



 getNavigation() {
this.http.get(
  `http://localhost:4040/route?email=${this.email}`,
  { responseType: 'text' }
).subscribe({
  next: (route: string) => {
    console.log(route);

    this.router.navigate(['/route'], {
      queryParams: { email: this.email }
    });
  },

  error: (err) => {
    console.log(err);
    alert("Unable to get navigation.");
  }
});
 }
}
