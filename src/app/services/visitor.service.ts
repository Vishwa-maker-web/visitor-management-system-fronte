import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  private http = inject(HttpClient);

  private api = 'http://localhost:4040/api/visitors';

  register(visitor: any) {
    return this.http.post(`${this.api}/register`, visitor, {
      responseType: 'text'
    });
  }

  getallVisitors(){
     return this.http.get<any[]>(`${this.api}/all`);
  }

  verifyOtp(data: any) {
  return this.http.post(
    'http://localhost:4040/api/visitors/verify-otp',
    data,
    { responseType: 'text' }
  );
}

deleteVisitor(id: number) {
  return this.http.delete(`${this.api}/delete/${id}`,
   { responseType:'text' }
  );
}
  


}