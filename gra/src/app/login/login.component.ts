import { Component, EventEmitter, Input, OnInit, Output,  } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';


export interface User {
  name: string,
  email: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

@Output() public loginForm = new EventEmitter<User>();
constructor() {}

  ngOnInit(): void {}
  public onClickLog(form: FormGroup): void{

    const user:User ={
      name:form.value.userName,
      email:form.value.userEmail
    }
    this.loginForm.emit(user)
  }
}
