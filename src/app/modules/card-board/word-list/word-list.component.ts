import { Component, OnInit } from '@angular/core';
import { Word } from '../../../core/interfaces/word';
import { WordCategory } from '../../../core/enums/word-category';
import { CardBoardApiService } from '../../../core/services/card-board-api.service';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.scss'],
})
export class WordListComponent implements OnInit {
  wordList: Word[] = [];
  constructor(private cardBoardApiService: CardBoardApiService) {}

  ngOnInit() {
    this.cardBoardApiService
      .getCategoryWords(WordCategory.supplies)
      .subscribe(wordList => (this.wordList = wordList));
  }
}
