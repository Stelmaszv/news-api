import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class TokkenService {
  get_TokkenUrl:string= 'http://127.0.0.1:8000/api/token/'
  constructor(private http:HttpClient,private Router:Router) { }
  getTokken(user){
    this.http.post(this.get_TokkenUrl,user).subscribe(tokken => {
      this.saveTokken(tokken)
    });
  }
  saveTokken(tokken){
    localStorage.setItem('tokkenAccess',tokken.access)
    localStorage.setItem('tokkenRefresh',tokken.refresh)
    this.Router.navigate(['/main'])
  }
  ifIssetTokken(){
    if(localStorage.tokkenAccess){
      return true;
    }
     return false
  }
}
