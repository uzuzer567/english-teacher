import { Component, Input } from '@angular/core';
import { Card } from '../../../core/interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() isCategory!: boolean;
  @Input() card!: Card;
}
