import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HighScore ,HightScoreService } from '../Service/hight-score.service';
import { PlayerDataService } from '../Service/player-data.service';
import { Router } from '@angular/router';

// export interface HighScore{
//   name: string,
//   score: number

// }

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  public highscore: Array<HighScore> = [];
  public userName: string = "";

  constructor(
      private _hightScoreService: HightScoreService, 
      private _location: Location, 
      private _playerDataService: PlayerDataService,
      private _router: Router
    ) { 
    this._hightScoreService.load().subscribe((result: any) => {
      this.highscore = result;
      console.log(result);
    })
    this.userName = this._playerDataService.user
     

  }
  
goBack(){
  // this._router.navigate(["game"])
  this._location.back()
}

ngOnInit(): void {
  }

}
