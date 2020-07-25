import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth:AuthService) { }

  ngOnInit(): void {
  }
  
  loginUser(event){
    event.preventDefault();
    const user = (<HTMLInputElement>document.getElementById("username")).value
    const password = (<HTMLInputElement>document.getElementById("password")).value
    console.log("Authorization started")
    this.Auth.callAuth(user,password);
  
  }
}
