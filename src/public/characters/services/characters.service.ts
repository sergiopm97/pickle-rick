import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  _url = 'https://rickandmortyapi.com/api/character';
  constructor(private http: HttpClient) {}
  getCharacters() {
    let headers = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get(this._url, {
      headers: headers,
    });
  }
}
