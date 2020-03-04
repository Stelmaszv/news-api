import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { NewsServieService } from '../../services/news-servie.service';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {
  search : string;
  newsLoop :Array<any>;
  constructor(private route: ActivatedRoute,private NewsServieService:NewsServieService) { }

  ngOnInit() {
    this.search=this.route.snapshot.params.search
    this.get_Data();
  }
  get_Data(){
    this.NewsServieService.get_all_news_in_category(this.search).subscribe(todos => {
      this.newsLoop = todos
    });
  }

}
