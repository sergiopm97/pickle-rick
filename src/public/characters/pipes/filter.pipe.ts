import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(characters: Array<any>, characterName: string): any {
    if (characterName === '') {
      return characters;
    } else {
      return characters.filter((character) => {
        return character.name
          .toLowerCase()
          .includes(characterName.toLowerCase());
      });
    }
  }
}
