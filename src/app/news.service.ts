import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
const Api= environment.api;
const ApiKey = environment.apikey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public currentAtricle;any;
  public category:any;
  constructor(private http:HttpClient) { }
  

  getData(){
    let url='https://newsapi.org/v2/top-headlines?' +
    'country=in&' + 'language=hi&'+
    'apiKey='+ ApiKey;
    return this.http.get(url);

  }

  getNewsByCategory(category:any){
    let url='https://newsapi.org/v2/top-headlines?' +
    'country=in&' +'category='+category + '&'+ 'language=hi&'+
    'apiKey='+ ApiKey;
    return this.http.get(url);

  }
}
