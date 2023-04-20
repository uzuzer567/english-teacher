import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CardBoardService } from '../../../core/services/card-board.service';
import { Mode } from '../../../core/enums/mode';

@Component({
  selector: 'app-toggle-mode-button',
  templateUrl: './toggle-mode-button.component.html',
  styleUrls: ['./toggle-mode-button.component.scss'],
})
export class ToggleModeButtonComponent implements OnInit {
  mode = Mode;
  @ViewChild('trainButtonElement') trainButtonElement!: ElementRef;
  @ViewChild('gameButtonElement') gameButtonElement!: ElementRef;

  constructor(private cardBoardService: CardBoardService) {}

  ngOnInit() {
    this.cardBoardService.activeMode$.subscribe(activeMode => {
      if (activeMode === Mode.game) {
        this.trainButtonElement.nativeElement.classList.remove('active');
        this.gameButtonElement.nativeElement.classList.add('active');
      } else {
        this.gameButtonElement.nativeElement.classList.remove('active');
        this.trainButtonElement.nativeElement.classList.add('active');
      }
    });
  }

  toggleMode(mode: Mode) {
    this.cardBoardService.activeMode$.next(mode);
  }
}
