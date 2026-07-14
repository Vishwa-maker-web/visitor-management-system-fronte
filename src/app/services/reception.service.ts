import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceptionService {

  private api = 'http://localhost:4040/reception';

  constructor(private http: HttpClient) {}

  getQueue(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/queue`);
  }

  verifyVisitor(email: string) {
    return this.http.post(
      `${this.api}/verify?email=${email}`,
      {},
      { responseType: 'text' }
    );
  }

  hostConfirm(email: string) {
    return this.http.post(
      `${this.api}/host-confirm?email=${email}`,
      {},
      { responseType: 'text' }
    );
  }

  assignRoom(email: string) {
    return this.http.post(
      `${this.api}/assign-room?email=${email}`,
      {},
      { responseType: 'text' }
    );
  }
}