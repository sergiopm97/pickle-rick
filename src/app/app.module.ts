import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CharactersModule } from 'src/public/characters/characters.module';
import { HomeModule } from 'src/public/home/home.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, CharactersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
