import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {

  private http = inject(HttpClient);

  private api = 'http://localhost:4040/room';

  getRooms() {
    return this.http.get<any[]>(`${this.api}/all`);
  }

  occupy(roomName: string) {
    return this.http.post(
      `${this.api}/occupy?roomName=${roomName}`,
      {},
      { responseType: 'text' }
    );
  }

  release(roomName: string) {
    return this.http.post(
      `${this.api}/release?roomName=${roomName}`,
      {},
      { responseType: 'text' }
    );
  }

  assignRoom() {
    return this.http.post(
      `${this.api}/assign`,
      {},
      { responseType: 'text' }
    );
  }

  terminate(roomName: string) {
    return this.http.post(
      `${this.api}/terminate?roomName=${roomName}`,
      {},
      { responseType: 'text' }
    );
  }

  extend(roomName: string) {
    return this.http.post(
      `${this.api}/extend?roomName=${roomName}`,
      {},
      { responseType: 'text' }
    );
  }
}