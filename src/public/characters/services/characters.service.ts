import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Injectable()
export class CharactersService {
  charactersData = new Array<any>();
  constructor() {
    interface CharacterPreview {
      id: number;
      name: string;
      status: string;
      image: string;
    }
    for (let page = 1; page < 42 + 1; page++) {
      const apiData = ajax(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      apiData.subscribe((res: any) => {
        for (
          let character = 0;
          character < res.response['results'].length;
          character++
        ) {
          let characterObject: CharacterPreview = {
            id: res.response['results'][character]['id'],
            name: res.response['results'][character]['name'],
            status: res.response['results'][character]['status'],
            image: res.response['results'][character]['image'],
          };
          this.charactersData.push(characterObject);
        }
      });
    }
  }
  getCharacters() {
    return this.charactersData;
  }
}
