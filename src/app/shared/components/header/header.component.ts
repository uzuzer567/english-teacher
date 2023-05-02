import { Component, OnInit } from '@angular/core';
import { Mode } from '../../../core/enums/mode';
import { CardBoardService } from '../../../core/services/card-board.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isGameStarted = false;
  currentMode!: Mode;
  Mode = Mode;
  constructor(private cardBoardService: CardBoardService) {}

  ngOnInit() {
    this.cardBoardService.activeMode$.subscribe(
      activeMode => (this.currentMode = activeMode)
    );
  }

  onStartGame() {
    this.isGameStarted = true;
    this.cardBoardService.isGameStarted$.next(true);
  }
}
