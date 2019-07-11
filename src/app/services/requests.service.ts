import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

    getIpAddress = function() {
       return this.http
          .get('https://api.hostip.info/get_html.php',{ responseType: 'text' });
    }

    getWeatherFromParam = function(param) {
       return this.http
          .get('https://api.apixu.com/v1/forecast.json?key=8c3c7daa94234a59bd7140955182012&q='+ param +'&days=7');
    }
}