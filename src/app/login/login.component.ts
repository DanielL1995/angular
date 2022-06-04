import { Component, EventEmitter, Input, OnInit, Output,  } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerDataService } from '../Service/player-data.service';


export interface User {
  name: string,
  email: string
}

export interface userLogged{
  name: string,
  email: string,
  color: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
 


  
  @Output() public loginForm = new EventEmitter<userLogged>();
constructor(
  private router:Router,
  private _playerDataService: PlayerDataService,
  private _fb: FormBuilder,
  private _activateRoute: ActivatedRoute
  ) {}
  public get color() { return this.spamForm.get('color') };
  public colorPalet = ["normal","high-contrast"];
  public selectColor(){
    this.router.navigate(['/login',
  this.spamForm.value["colorPalet"]])
 
  }

  

public spamForm = this._fb.group({
  name:['',[
    Validators.required,
    Validators.minLength(5)
  ]],
  email:['',[
    Validators.required,
    Validators.email,
  ]],
  colorPalet:["normal",[
    Validators.required
  ]]
})




   ngOnInit(){
    this._activateRoute.params.subscribe(params=>{
      this.spamForm.patchValue({"colorPalet": params["color"]})
     
    })
   }

get name() {
    return this.spamForm.get('name');
}
get email() {
    return this.spamForm.get('email');
}
  
  public onClickLog(){

     this._playerDataService.user = this.name?.value
     this._playerDataService.email = this.email?.value
    
     console.log( this._playerDataService.user );
     console.log( this._playerDataService.email );
    this.router.navigate([`/game/${this.spamForm.value["colorPalet"]}`])
    // this.loginForm.emit()
  
  }
}
