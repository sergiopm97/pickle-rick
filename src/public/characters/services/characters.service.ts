import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Injectable()
export class CharactersService {
  charactersData = new Array<any>();
  constructor() {
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
          this.charactersData.push(res.response['results'][character]);
        }
      });
    }
  }
  getCharacters() {
    return this.charactersData;
  }
}
