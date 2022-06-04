import { Component, Input, OnInit } from '@angular/core';
import { UserPanel } from '../game.component';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnInit {

  constructor() { }

  @Input() data: UserPanel ={
    user: {
      name: '',
      email: '' 
    },
    score: 0,
    time: 0,
    gameStatus: ''
  }
  

  ngOnInit(): void {
  }

}
