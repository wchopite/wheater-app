import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})

export class WeatherCardComponent implements OnInit {
  @Input() locationSelected;
  @Input() hasLocation;
  scaleSelected: string = 'C';
	@HostBinding('attr.class') cssClass = 'col-md-12';

  constructor(private requestsService : RequestsService) {    
  }

  ngOnInit() {
           
  }

  changeScale(scale){
    this.scaleSelected = scale;
  }
}
