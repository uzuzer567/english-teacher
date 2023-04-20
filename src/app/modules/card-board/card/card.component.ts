import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Card } from '../../../core/interfaces/card';
import { CardBoardService } from '../../../core/services/card-board.service';
import { Mode } from '../../../core/enums/mode';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  mode = Mode;
  currentMode!: Mode;

  @Input() card!: Card;
  cardDescription!: string;
  @ViewChild('cardElement') cardElement!: ElementRef;

  constructor(private cardBoardService: CardBoardService) {}

  ngOnInit() {
    this.cardBoardService.activeMode$.subscribe(activeMode => {
      this.currentMode = activeMode;
      this.cardDescription = this.card.word;
    });
  }

  onPlayAudio() {
    const audio = new Audio(this.card.audioSrc);
    audio.play();
  }

  onTranslate(event: Event) {
    if (
      !this.cardElement.nativeElement.classList.contains('card__rotated') &&
      !(event.target as Element).classList.contains('card__buttons')
    ) {
      this.cardElement.nativeElement.classList.add('card__rotated');
      this.cardDescription = this.card.translation;
    } else {
      this.cardElement.nativeElement.classList.remove('card__rotated');
      this.cardDescription = this.card.word;
    }
  }
}
