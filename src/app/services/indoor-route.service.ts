import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndoorRouteService {

  private http = inject(HttpClient);

  private api = "http://localhost:4040/route";

  getRoute(email: string) {
    return this.http.get(this.api + "?email=" + email, {
      responseType: 'text'
    });
  }
}