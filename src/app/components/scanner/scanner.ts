import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-scanner',
  standalone: true,
  imports: [ZXingScannerModule],
  templateUrl: './scanner.html',
  styleUrl: './scanner.css'
})
export class Scanner {

  scanned = false;

  constructor(private http: HttpClient) {}

  scanQr(qrData: string) {

    if (this.scanned) {
      return;
    }

    this.scanned = true;

    console.log('QR Data:', qrData);

    const parts = qrData.split('|');

    if (parts.length !== 2) {
      alert('Invalid QR Code');
      this.scanned = false;
      return;
    }

    const email = parts[0]
      .replace('EMAIL=', '')
      .trim();

    const idNumber = parts[1]
      .replace('ID=', '')
      .trim();

    console.log('Email:', email);
    console.log('ID Number:', idNumber);

    this.http.post(
      'http://localhost:4040/gate/scan',
      null,
      {
        params: {
          email: email,
          idNumber: idNumber
        },
        responseType: 'text'
      }
    ).subscribe({
      next: (response: string) => {
        alert(response);
      },
      error: (error: any) => {
        console.log(error);
        alert('Gate scan failed');
        this.scanned = false;
      }
    });
  }
}