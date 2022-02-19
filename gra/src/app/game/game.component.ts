import { Component, OnInit, Input,Output, ViewChild, HostListener, EventEmitter } from '@angular/core';
import { NgxSnakeComponent } from 'ngx-snake';
import { User } from '../login/login.component';


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
  @Input()public user!: User; 
  @Output() public logOut = new EventEmitter<User>();
    

  constructor() { }

  ngOnInit(): void {
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
    this.score++;
     console.log(this.score)
  }
  public onStartButtonPressed() {
    if (this.gameStatus !== "paused") {
      this.resetCounters();
    }
    this.gameStatus = "started";
    this.timerInterval = setInterval(() => {
      this.timer++;
    }, 1000);
    this._snake.actionStart();
  }
  public onStopButtonPressed() {
    clearInterval(this.timerInterval);
    this.gameStatus = "paused";
    this._snake.actionStop();
  }
  public onResetButtonPressed() {
    clearInterval(this.timerInterval);
    this.gameStatus = "started";
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
    this.score = 0;
    this.timer = 0;
  }
  public onClickLogOut() {
    this.logOut.emit();
  }
  public gameOver() {
    clearInterval(this.timerInterval);
    this.gameStatus = "end";
  }
}

//9