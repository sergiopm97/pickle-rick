import { Component, OnInit } from '@angular/core';
import { CharactersService } from './services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  public characters: Array<any> = [];
  constructor(private CharactersService: CharactersService) {
    this.CharactersService.getCharacters().subscribe((res: any) => {
      this.characters = res;
    });
  }

  ngOnInit(): void {}
}
