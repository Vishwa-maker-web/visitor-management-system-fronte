import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingRoomService } from '../../services/meeting-room.service';

@Component({
  selector: 'app-meeting-room',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meeting-room.html',
  styleUrls: ['./meeting-room.css']
})
export class MeetingRoom implements OnInit {

  private meetingRoomService = inject(MeetingRoomService);

  rooms = signal<any[]>([]);

  ngOnInit(): void {
    this.loadRooms();

    setInterval(() => {
      this.loadRooms();
    }, 3000);
  }

  loadRooms() {
    this.meetingRoomService.getRooms().subscribe((data: any) => {
      this.rooms.set(data);
    });
  }

  occupy(roomName: string) {
    this.meetingRoomService.occupy(roomName).subscribe((res: any) => {
      alert(res);
      this.loadRooms();
    });
  }

  release(roomName: string) {
    this.meetingRoomService.release(roomName).subscribe((res: any) => {
      alert(res);
      this.loadRooms();
    });
  }

  assignRoom() {
    this.meetingRoomService.assignRoom().subscribe((res: any) => {
      alert(res);
      this.loadRooms();
    });
  }

  terminate(roomName: string) {
    this.meetingRoomService.terminate(roomName).subscribe((res: any) => {
      alert(res);
      this.loadRooms();
    });
  }

  extend(roomName: string) {
    this.meetingRoomService.extend(roomName).subscribe((res: any) => {
      alert(res);
    });
  }

}