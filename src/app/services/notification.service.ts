import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private api = 'http://localhost:4040/notification';

  constructor(private http: HttpClient) {}

 getAll() {
  return this.http.get<any[]>(`${this.api}/all`);
}

markRead(id: number) {
  return this.http.put(
   ` ${this.api}/read?id=${id}`,
    {},
    { responseType: 'text' }
  );
}
}
