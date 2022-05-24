import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams  } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http: HttpClient) {}

  title = 'weather-app';

  ngOnInit(): void {
    this.getWeather();
  }

  search(){
    this.getWeather();
  }

  getWeather(){
    let header = new HttpHeaders({
      'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
      'X-RapidAPI-Key': '00ec9b22ebmsh606d8ad6fdb8db8p1651eejsnc5d86aad3b6e'
    });

  let param = {
        q: 'London,uk',
       
    }
  
    this.http
    .get<any>('https://community-open-weather-map.p.rapidapi.com/weather/', {
      headers: header,
      params : param
    }) 
    .subscribe(data => {
      console.log(data);
    });
  }
}
