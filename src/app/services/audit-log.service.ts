import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuditLogService {
  private http = inject(HttpClient);
    getAuditLogs() {
  return this.http.get<any[]>("http://localhost:4040/audit/all");
}
}
