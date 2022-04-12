import { Component, OnInit } from '@angular/core';
import { CharactersService } from './services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  page: number = 1;
  characters = new Array<any>();
  constructor(charactersService: CharactersService) {
    this.characters = charactersService.getCharacters();
  }

  ngOnInit(): void {}
}
