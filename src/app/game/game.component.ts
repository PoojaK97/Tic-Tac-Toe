import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  grid = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
   ];
}
