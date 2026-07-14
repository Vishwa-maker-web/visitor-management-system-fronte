import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../services/dashboard.service';
import { VisitorService } from '../../services/visitor.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './reports.html',
  styleUrl: './reports.css'
})
export class Reports implements OnInit {

  private dashboardService = inject(DashboardService);
  private visitorService = inject(VisitorService)

  report = signal<any>(null);
  recentVisitors = signal<any[]>([]);

  ngOnInit(): void {
  this.visitorService.getallVisitors().subscribe({
  next: (data:any[]) => {
    this.recentVisitors.set(data.slice(-5).reverse());
    console.log(this.recentVisitors);
  },
  error:(err) => console.log('error fetching visitors: ', err),
});
  }
}