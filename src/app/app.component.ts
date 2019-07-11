import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestsService } from './services/requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time = new Observable(observer => {
    setInterval(() => observer.next(new Date().toString()),1000);
  });

  constructor(private requestsService : RequestsService) {    
  }

  getQuickWeather(location){
    this.requestsService.getWeatherFromParam(location).subscribe(
      function(response) { 
        console.log(response)
      },
      function(error) { console.log(error)},
      function() { console.log("the weather location is completed")}
    );
    return false;
  }
}

