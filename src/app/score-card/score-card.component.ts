import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.css']
})
export class ScoreCardComponent {
  leftPlayerScore = 1;
  rightPlayerScore = 1;
}
