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
      name: string;
      status: string;
      species: string;
      gender: string;
      location: string;
      image: string;
    }
    this.route.params.subscribe((params) => {
      this.id = params['id'].toString();
    });
    ajax(`https://rickandmortyapi.com/api/character/${this.id}`).subscribe(
      (res: any) => {
        let characterObject: CharacterFull = {
          name: res.response['name'],
          status: res.response['status'],
          species: res.response['species'],
          gender: res.response['gender'],
          location: res.response['location'],
          image: res.response['image'],
        };
        this.character.push(characterObject);
      }
    );
  }

  ngOnInit(): void {}
}
