import { Component, OnInit,Input  } from '@angular/core';
import { NewsServieService } from '../../services/news-servie.service';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  @Input() category;
  newsLoop
  constructor(private NewsServieService:NewsServieService) {  }
  ngOnInit(){
    this.get_Data();
  }
  get_Data(){
    this.NewsServieService.get_news(this.category.search).subscribe(todos => {
      this.newsLoop = todos
    });
  }


}
