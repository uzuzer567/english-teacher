import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './modules/card-board/card/card.component';
import { CardListComponent } from './modules/card-board/card-list/card-list.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ToggleModeButtonComponent } from './shared/components/toggle-mode-button/toggle-mode-button.component';

@NgModule({
  declarations: [AppComponent, CardComponent, CardListComponent, HeaderComponent, ToggleModeButtonComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
