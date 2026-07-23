import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VisitorService } from '../../services/visitor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-visitor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-visitor.html',
  styleUrl: './register-visitor.css'
})
export class RegisterVisitor {
  constructor(
  private visitorService: VisitorService,
  private router: Router
){}
  visitor = {
    name: '',
    email: '',
    phone: '',
    idNumber: '' ,
    purpose: ''
  };

register() {
  this.visitorService.register(this.visitor).subscribe({
    next: (res: any) => {
      alert('OTP sent successfully');
      console.log(res);

      this.router.navigate(['/verify-otp'], {
        queryParams: { email: this.visitor.email }
      });
    },
    error: (err: any) => {
      console.log(err);
      alert('Registration failed');
    }
  });
}
goToLogin() {
    this.router.navigate(['/visitor-login']);
  }
}
