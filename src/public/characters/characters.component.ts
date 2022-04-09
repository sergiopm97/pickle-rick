import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters = new Array<any>();
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
          this.characters.push(res.response['results'][character]);
        }
      });
    }
  }

  ngOnInit(): void {}
}
