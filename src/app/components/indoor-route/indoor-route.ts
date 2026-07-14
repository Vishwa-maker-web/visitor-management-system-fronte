import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IndoorRouteService } from '../../services/indoor-route.service';

@Component({
  selector: 'app-indoor-route',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './indoor-route.html'
})
export class IndoorRoute {

  private indoorRouteService = inject(IndoorRouteService);

  email = "";

  route = "";

  getRoute() {

    this.indoorRouteService.getRoute(this.email).subscribe((res:any)=>{

      this.route = res;

    });

  }

  speak(){

    let speech = new SpeechSynthesisUtterance(this.route);

    speechSynthesis.speak(speech);

  }

  recalculate(){

    alert("Route Recalculated");

    this.route =
    "Gate ➜ Reception ➜ Lift ➜ Corridor ➜ Meeting Room";

  }

}