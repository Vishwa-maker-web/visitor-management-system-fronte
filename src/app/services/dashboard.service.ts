import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private http = inject(HttpClient);

  private api = 'http://localhost:4040/dashboard';

  getSummary() {
    return this.http.get(`${this.api}/summary`);
  }
getReport() {
  return this.http.get<any>('http://localhost:4040/api/visitors/reports');
}
}