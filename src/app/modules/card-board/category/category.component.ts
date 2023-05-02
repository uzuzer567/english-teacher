import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../../core/interfaces/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  @Input() category!: Category;
  constructor(private router: Router) {}

  onSelect(): void {
    this.router.navigate(['/category', this.category.id]);
  }
}
