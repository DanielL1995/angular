import { Component, OnInit, Input,Output, ViewChild, HostListener, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSnakeComponent } from 'ngx-snake';
import { PlayerDataService } from '../Service/player-data.service';


export interface UserPanel{
  user: {
    name: string,
    email: string 
  },
  score: number,
  time: number,
  gameStatus: string
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  

    @ViewChild(NgxSnakeComponent)
  private _snake!: NgxSnakeComponent; 
    
  public score: number = 0;
  public timer: number = 0;
  public timerInterval!: any;
  public gameStatus: string = 'Ready';
  public colorPalet: string ='normal'
  
  public user: UserPanel ={
    user: {
      name:this._playerDataService.user,
      email:this._playerDataService.email
    },
    score: 0,
    time: 0,
    gameStatus: ""
    
    
  }
  // @Input()public user!: userLogged; 
  // @Output() public logOut = new EventEmitter<User>();
    

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _playerDataService: PlayerDataService,
    ) {
      
    }

    ngOnInit(): void {
      this._activatedRoute.params.subscribe((params) => {
        this.colorPalet = params['color'];
        
      })
    }

  public onUpButtonPress() {
    this._snake.actionUp();
  }
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
  switch (event.keyCode) {
    case 37:
      this.onLeftButtonPressed();
      break;
    case 38:
      this.onUpButtonPressed();
      break;
    case 39:
      this.onRightButtonPressed();
      break;
    case 40:
      this.onDownButtonPressed();
      break;
    }
  }

  public foodEaten() {
    this.user.score++;
     console.log(this.score)
  }
  public onStartButtonPressed() {
    if (this.gameStatus !== "paused") {
      this.resetCounters();
    }
    this.user.gameStatus = "started";
    this.timerInterval = setInterval(() => {
      this.user.time++;
    }, 1000);
    this._snake.actionStart();
  }
  public onStopButtonPressed() {
    clearInterval(this.timerInterval);
    this.user.gameStatus = "paused";
    this._snake.actionStop();
  }
  public onResetButtonPressed() {
    clearInterval(this.timerInterval);
    this.user.gameStatus = "started";
    this.resetCounters();
    this._snake.actionReset();
  }
  public onLeftButtonPressed() {
    this._snake.actionLeft();
  }
  public onUpButtonPressed() {
    this._snake.actionUp();
  }
  public onRightButtonPressed() {
    this._snake.actionRight();
  }
  public onDownButtonPressed() {
    this._snake.actionDown();
  }
  private resetCounters() {
    this.user.score = 0;
    this.user.time = 0;

  }
  public onClickLogOut() {
    // this.logOut.emit();
    this._router.navigate(['/login'])
  }
  public gameOver() {
    clearInterval(this.timerInterval);
    console.log(this.user);
    this.user.gameStatus = "end";
    console.log( "end");
  }
  public onClickHighScore() {
    
    this._router.navigate(["highscore"]);
  }
}

//9