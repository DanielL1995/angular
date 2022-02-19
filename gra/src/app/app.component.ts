import { Component, ViewChild } from '@angular/core';
import { NgxSnakeComponent } from 'ngx-snake';
import { User } from './login/login.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  
  title = 'Snake';
 public userLoggedIn: boolean = false;
 public user:User ={
   name:"",
   email:""
 }

 public onClickLog(user:User):void {
  this.userLoggedIn = true;
  this.user = user;
}
public onClickLogout(): void{
  this.userLoggedIn = false
  this.user = {
    name: "",
    email: ""
  };
}
 

}