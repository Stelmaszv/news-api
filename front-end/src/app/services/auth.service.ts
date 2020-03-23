import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { auth } from '../models/auth';
import { TokkenService } from './tokken.service'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  if_Auth_url:string='http://127.0.0.1:8000/api/news/ifAuth'
  constructor(private http:HttpClient,private Tokken:TokkenService) { }
  ifAuth(){
    return !!this.Tokken.ifIssetTokken()
  }
  login(user) {
    this.Tokken.getTokken(user);
  }

}
