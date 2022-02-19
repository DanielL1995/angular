import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSnakeModule } from 'ngx-snake';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    NgxSnakeModule,
    FormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

