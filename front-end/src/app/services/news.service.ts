import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  adnews:string= 'http://127.0.0.1:8000/api/news/addnews/'
  constructor(private http:HttpClient) { }
  AddNews(data){
    console.log(data)
    this.http.post(this.adnews,data).subscribe(tokken => {
      console.log(data)
    });
  }
}
