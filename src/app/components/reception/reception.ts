import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceptionService } from '../../services/reception.service';

@Component({
  selector: 'app-reception',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reception.html',
  styleUrl: './reception.css'
})
export class ReceptionComponent implements OnInit {

  private service = inject(ReceptionService);

  visitors = signal<any[]>([]);

  ngOnInit(): void {
    this.loadVisitors();
  }

  loadVisitors() {
    this.service.getQueue().subscribe({
      next: (data: any[]) => this.visitors.set(data),
      error: (err) => console.log(err)
    });
  }

  verifyVisitor(email: string) {
    this.service.verifyVisitor(email).subscribe({
      next: (res) => {
        alert(res);
        this.loadVisitors();
      },
      error: (err) => console.log(err)
    });
  }

  hostConfirm(email: string) {
    this.service.hostConfirm(email).subscribe({
      next: (res) => {
        alert(res);
      },
      error: (err) => console.log(err)
    });
  }

  assignRoom(email: string) {
    this.service.assignRoom(email).subscribe({
      next: (res) => {
        alert(res);
        this.loadVisitors();
      },
      error: (err) => console.log(err)
    });
  }
}