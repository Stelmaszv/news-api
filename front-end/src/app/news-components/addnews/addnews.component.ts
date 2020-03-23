import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { NewsService } from '../../services/news.service'

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent{
  AddNews: FormGroup;
  constructor(private fb: FormBuilder,private news:NewsService) {
    this.AddNews = fb.group({
      subject :[''], 
      discription :[''],  
      });
  }
  onSubmit(){
    this.news.AddNews(this.AddNews.value)
  }

}
