import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordComponent } from './modules/card-board/word/word.component';
import { WordListComponent } from './modules/card-board/word-list/word-list.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ToggleModeButtonComponent } from './shared/components/toggle-mode-button/toggle-mode-button.component';
import { CategoryListComponent } from './modules/card-board/category-list/category-list.component';
import { CategoryComponent } from './modules/card-board/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    WordListComponent,
    HeaderComponent,
    ToggleModeButtonComponent,
    CategoryListComponent,
    CategoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
