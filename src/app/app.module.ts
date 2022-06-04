import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSnakeModule } from 'ngx-snake';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GameComponent } from './game/game.component';
import { RouterModule } from '@angular/router';
import { IntroComponent } from './login/intro/intro.component';
import { ScoresComponent } from './scores/scores.component';
import { IntroPageComponent } from './login/intro-page/intro-page.component';
import { PlayerDataService } from './Service/player-data.service';
import { GameInfoComponent } from './game/game-info/game-info.component';
import { HttpClientModule } from '@angular/common/http';
import { SortScorePipe } from './pipes/sort-score.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GameComponent,
    IntroComponent,
    ScoresComponent,
    IntroPageComponent,
    GameInfoComponent,
    SortScorePipe
  ],
  imports: [
    BrowserModule,
    NgxSnakeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'login', component: IntroPageComponent},
      { path:'game/:color', component: GameComponent},
      { path: 'game', component: GameComponent },
      {path:'highscore', component: ScoresComponent},
      { path: '**', redirectTo: 'login' }
    ])

    
  ],
  providers: [PlayerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

