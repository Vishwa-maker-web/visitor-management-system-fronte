import { Component, inject, OnInit } from '@angular/core';
import { VisitorService } from '../../services/visitor.service';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-visitor-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './visitor-list.html',
  styleUrl: './visitor-list.css',
})
export class VisitorList implements OnInit{
  private visitorService = inject(VisitorService);
  
  ngOnInit(): void {
      this.loadVisitors();
  }


visitors = signal<any[]>([]);
selectedVisitor: any = null;
showPopup = false;
deleteVisitor: any = null;
showDeletePopup = false;

loadVisitors() {
  this.visitorService.getallVisitors().subscribe({
    next: (data: any[]) => {
      this.visitors.set(data);
      console.log(this.visitors());
    },
    error: (err) => console.log(err)
  });
}

viewVisitor(visitor:any){
  this.selectedVisitor = visitor;
  this.showPopup = true;
}

closePopup(){
  this.showPopup = false;
}

completed(visitor: any) {
  this.deleteVisitor = visitor;
  this.showDeletePopup = true;
}

cancelDelete() {
  this.showDeletePopup = false;
}

confirmDelete() {
  this.visitorService.deleteVisitor(this.deleteVisitor.id).subscribe(() => {
    this.loadVisitors();
    this.showDeletePopup = false;
  });
}
}
