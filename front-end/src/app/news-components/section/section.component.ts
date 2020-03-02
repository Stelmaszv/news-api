import { Component, OnInit,Input  } from '@angular/core';
import { NewsServieService } from '../../services/news-servie.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  @Input() category:Array<any>;
  newsLoop:Array<any>;;
  constructor(private NewsServieService:NewsServieService) {  }
  ngOnInit(){
    this.get_Data();
  }
  get_Data(){
   this.newsLoop=this.NewsServieService.get_news(this.category);
  }

}
