import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})

export class CharacterComponent implements OnInit {
  id: string = String();
  character = new Array<any>();
  constructor(private route: ActivatedRoute) {
    interface CharacterFull {
      id: number,
      name: string,
      status: string,
      species: string,
      gender: string,
      origin: string,
      location: string,
      image: string,
      episode: Array<string>,
    }
    this.route.params.subscribe((params) => {
      this.id = params['id'].toString();
    });
    ajax(`https://rickandmortyapi.com/api/character/${this.id}`).subscribe(
      (res: any) => {
        let characterObject: CharacterFull = {
          id: res.response["id"],
          name: res.response["name"],
          status: res.response["status"],
          species: res.response["species"],
          gender: res.response["gender"],
          origin: res.response["origin"],
          location: res.response["location"],
          image: res.response["image"],
          episode: res.response["episode"]
        }
        this.character.push(characterObject);
      }
    );
  }

  ngOnInit(): void {}
}
