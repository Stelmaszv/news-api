import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,private Auth:AuthService) {
    this.loginForm = fb.group({
      username :[''], 
      password :[''],  
      });
  }
  onSubmit(){

    this.Auth.login(this.loginForm.value)
  }
}
