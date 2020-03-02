import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sections',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  sport = {'search':"sport","title":"Sport"}
  ontop = {'search':"ontop","title":"On top"}
  entertainment  = {'search':"entertainment","title":"Entertainment"}
  biznes  = {'search':"biznes","title":"Biznes"}
  constructor() { }

  ngOnInit() {
  }

}
