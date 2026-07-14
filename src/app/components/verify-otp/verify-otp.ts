 import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { VisitorService } from '../../services/visitor.service';

@Component({
  selector: 'app-verify-otp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.css'
})
export class VerifyOtp {

  private visitorService = inject(VisitorService);
  private router = inject(Router);

  email = '';
  otp = '';

  verifyOtp() {
    const request = {
      email: this.email,
      otp: this.otp
    };

    this.visitorService.verifyOtp(request).subscribe({
      next: (res: any) => {
        alert(res);
        localStorage.setItem('qrPath',res);
         localStorage.setItem('email',this.email);
        this.router.navigate(['/qr']);
      },
      error: () => {
        alert("Invalid OTP");
      }
    });
  }
}
