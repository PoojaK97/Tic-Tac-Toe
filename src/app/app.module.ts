import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreCardComponent } from './score-card/score-card.component';
import { GameAreaComponent } from './game-area/game-area.component';
import { GameComponent } from './game/game.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { PlayerDetailsFormComponent } from './player-details-form/player-details-form.component';
import { GameControlsComponent } from './game-controls/game-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreCardComponent,
    GameAreaComponent,
    GameComponent,
    PlayerDetailsComponent,
    PlayerDetailsFormComponent,
    GameControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
