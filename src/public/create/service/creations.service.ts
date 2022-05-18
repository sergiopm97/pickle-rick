import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CreationsService {
  constructor(private http: HttpClient) {}

  postCreation(creation: any) {
    return this.http
      .post<any>('http://localhost:3000/creations', creation)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
