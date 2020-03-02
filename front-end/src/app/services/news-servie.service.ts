import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class NewsServieService {
  constructor() { }
  get_news(category:Array<any>){
    return [
      {'id':1,'title':'test','discription':'dqdqdqd'},
      {'id':2,'title':'test2','discription':'dqdqdqde2'},
      {'id':3, 'title':'test3','discription':'dqdqdqde3'},
      {'id':4,'title':'test4','discription':'dqdqdqd4'},
      {'id':5,'title':'test5','discription':'dqdqdqde5'},
      {'id':6, 'title':'test6','discription':'dqdqdqde6'}
    ]
  }
}
