import { Component, OnInit } from '@angular/core';
import { Card } from '../../../core/interfaces/card';
import { CardCategory } from '../../../core/enums/card-category';
import { CardBoardApiService } from '../../../core/services/card-board-api.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  cardList: Card[] = [];
  constructor(private cardBoardApiService: CardBoardApiService) {}

  ngOnInit() {
    this.cardBoardApiService
      .getCategoryCards(CardCategory.homeStuff)
      .subscribe(cardList => (this.cardList = cardList));
  }
}
