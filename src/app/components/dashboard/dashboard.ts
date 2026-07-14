import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

 

  constructor(private dashboardService: DashboardService) {}


summary = signal<any>(null);

ngOnInit(): void {
  this.dashboardService.getSummary().subscribe({
    next: (data: any) => {
      this.summary.set(data);
    },
    error: (err) => console.log(err)
  });
}
}