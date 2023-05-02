import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Word } from '../../../core/interfaces/word';
import { CardBoardService } from '../../../core/services/card-board.service';
import { Mode } from '../../../core/enums/mode';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss'],
})
export class WordComponent implements OnInit {
  mode = Mode;
  currentMode!: Mode;

  @Input() word!: Word;
  cardDescription!: string;
  @ViewChild('cardElement') cardElement!: ElementRef;

  constructor(private cardBoardService: CardBoardService) {}

  ngOnInit() {
    this.cardBoardService.activeMode$.subscribe(activeMode => {
      this.currentMode = activeMode;
      this.cardDescription = this.word.word;
    });
  }

  onPlayAudio(event: Event) {
    const audio = new Audio(this.word.audioSrc);
    audio.play();
    event.stopPropagation();
  }

  onTranslate(event: Event) {
    if (this.currentMode == Mode.training) {
      if (
        !this.cardElement.nativeElement.classList.contains('card__rotated') &&
        !(event.target as Element).classList.contains('card__buttons')
      ) {
        this.cardElement.nativeElement.classList.add('card__rotated');
        this.cardDescription = this.word.translation;
      } else {
        this.cardElement.nativeElement.classList.remove('card__rotated');
        this.cardDescription = this.word.word;
      }
    }
  }
}
