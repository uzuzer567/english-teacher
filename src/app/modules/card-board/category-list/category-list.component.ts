import { Component, OnInit } from '@angular/core';
import { Category } from '../../../core/interfaces/category';
import { CardBoardApiService } from '../../../core/services/card-board-api.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  categoryList: Category[] = [];
  constructor(private cardBoardApiService: CardBoardApiService) {}

  ngOnInit() {
    this.cardBoardApiService
      .getWordCategories()
      .subscribe(categoryList => (this.categoryList = categoryList));
  }
}
