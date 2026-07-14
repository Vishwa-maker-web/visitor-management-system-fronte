import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditLogService } from '../../services/audit-log.service';

@Component({
  selector: 'app-audit-logs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audit-logs.html',
  styleUrl: './audit-logs.css'
})
export class AuditLogs {
  private auditService = inject(AuditLogService);

  logs = signal<any[]>([]);

  ngOnInit() {
    this.auditService.getAuditLogs().subscribe({
      next: (data) => {
        this.logs.set(data);
        console.log(this.logs());
      },
      error: (err) => console.log(err)
    });
  }
}