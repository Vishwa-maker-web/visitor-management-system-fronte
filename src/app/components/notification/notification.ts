 import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.html',
  styleUrl: './notification.css'
})
export class NotificationComponent implements OnInit {

  private service = inject(NotificationService);

  notifications = signal<any[]>([]);

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications() {
    this.service.getAll().subscribe({
      next: (data: any[]) => this.notifications.set(data),
      error: (err) => console.log(err)
    });
  }

  read(id: number) {
    this.service.markRead(id).subscribe(() => {
      this.loadNotifications();
    });
  }
}

