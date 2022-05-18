import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CharactersModule } from 'src/public/characters/characters.module';
import { HomeModule } from 'src/public/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CharactersService } from 'src/public/characters/services/characters.service';
import { FormsModule } from '@angular/forms';
import { CreateModule } from 'src/public/create/create.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CharactersModule,
    CreateModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [CharactersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
