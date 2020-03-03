import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { News } from '../models/news';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class NewsServieService {
  news_Url:string = 'http://127.0.0.1:8000/api/news/getAll';
  news_item:string= 'http://127.0.0.1:8000/api/news/get'
  constructor(private http:HttpClient) { }
  get_news(category:Array<any>) {
    return this.http.get<News[]>(this.url(this.news_Url,category.search));
  }
  url(url,category:string){
    return url+'/'+category+'/'
  }
  get(id:int){
    return this.http.get<News[]>(this.url(this.news_item,id));
  }
}
