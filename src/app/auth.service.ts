import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders} from '@angular/common/http';
import { ResponseModel } from '../app/login/responseModel';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  response:ResponseModel; 
  constructor(private http: HttpClient) { }
  requestHeaders = new HttpHeaders()
  .append('Content-Type', 'application/json')
  .append('Access-Control-Allow-Headers', 'Content-Type')
  .append('Access-Control-Allow-Origin', '*')
  .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  .append('Access-Control-Allow-Credentials', 'true');
  
  callAuth(username:string,password:string){
    return this.http.post('http://localhost:8001/auth/login',{
       username,
       password
    },{headers:this.requestHeaders}).subscribe(data => {
     this.response = <ResponseModel>data;
     window.location.href ="http://localhost:4200/admin";
      console.log(this.response.user.nombre, "Se Conecto!")
    })
  } 
}
