import { Pipe, PipeTransform } from '@angular/core';
import { HighScore } from '../Service/hight-score.service';

@Pipe({
  name: 'sortScore'
})
export class SortScorePipe implements PipeTransform {

  transform(listScore: Array<HighScore>): Array<HighScore> {
    let list = listScore.sort((a,b)=>b.score - a.score);
    return list.slice(0,11);
  }

}
