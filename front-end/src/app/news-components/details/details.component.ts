import { Component, OnInit } from '@angular/core';
import { NewsServieService } from '../../services/news-servie.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  Detail;
  constructor(private route: ActivatedRoute,private NewsServieService:NewsServieService) { }

  ngOnInit() {
    this.get_Data(this.route.snapshot.params.id)
  }
  get_Data(id){
    this.NewsServieService.get(id).subscribe(todos => {
      this.Detail = todos[0];
    });
  }
}
