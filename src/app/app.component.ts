import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams  } from '@angular/common/http';
// import { FlickrService } from './flickr.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http: HttpClient) {}

  title = 'weather-app';
  items = [];
  
  

  onSubmit(){
    
  }

  ngOnInit(): void {
    this.getWeather();
  }

  search(){
    this.getWeather();
  }

  flipImg(){
    this.getPicture();
  }

  getWeather(){
    let header = new HttpHeaders({
      'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
      'X-RapidAPI-Key': '00ec9b22ebmsh606d8ad6fdb8db8p1651eejsnc5d86aad3b6e',
    });

  let param = {
        q: 'London,uk', 
    }
  
    this.http
    .get<any>('https://community-open-weather-map.p.rapidapi.com/weather/', {
      headers: header,
      params : param
    }) 
    .subscribe({
      next:(data)=>{
        console.log(data)
        console.log(data.clouds.all);
        console.log(data.main.humidity);
        console.log(data.main.temp);
        console.log(data.main.pressure);
        console.log(data.wind.speed);
        console.log(data.weather[0].description);
        this.items = data

      },
      error:(err)=>{
        alert('Getting details unsuccessful' + err)
      }
      
    });
  }


  imageUrl ?:` http://www.flickr.com/photos/22365685@N03/galleries/72157622254010831/format=json&jsoncallback=JSONP_CALLBACK`;

  getPicture(){
    

    let headContent = new HttpHeaders({
      'api_key': '6c5950552b30f3c31bcf1f71498f33df',
      'id': '22342631-72157622254010831'
    });

    this.http
    .get<any>('http://www.flickr.com/photos/22365685@N03/galleries/72157622254010831/format=json&jsoncallback=JSONP_CALLBACK',{
      headers: headContent,
    })
    .subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        alert('Getting details unsuccessful' + err)
      }  
    });
  }
}
