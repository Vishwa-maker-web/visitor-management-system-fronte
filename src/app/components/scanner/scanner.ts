import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jsQR from 'jsqr';

@Component({
  selector: 'app-scanner',
  standalone: true,
  imports: [],
  templateUrl: './scanner.html',
  styleUrl: './scanner.css'
})
export class Scanner {

  scanned = false;

  constructor(private http: HttpClient) {}

  async scanImage(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];

    const image = new Image();
    image.src = URL.createObjectURL(file);

    image.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        alert('Canvas not supported');
        return;
      }

      canvas.width = image.width;
      canvas.height = image.height;

      ctx.drawImage(image, 0, 0);

      const imageData = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      );

      const code = jsQR(
        imageData.data,
        imageData.width,
        imageData.height
      );

      if (code) {
        this.scanQr(code.data);
      } else {
        alert('QR Code not detected');
      }
    };
  }

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

    this.http.post(
      'http://13.206.110.245:4040/gate/scan',
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
        this.scanned = false;
      },
      error: (error: any) => {
        console.log(error);
        alert('Gate scan failed');
        this.scanned = false;
      }
    });
  }
}
