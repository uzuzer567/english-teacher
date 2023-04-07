import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './modules/card-board/card/card.component';
import { CardListComponent } from './modules/card-board/card-list/card-list.component';

@NgModule({
  declarations: [AppComponent, CardComponent, CardListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
