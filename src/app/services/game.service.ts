import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  baseUrl: string = environment.api;

  constructor(private http: HttpClient, private _srvStorage: StorageService) {}

  get(id: any): Observable<any> {
    const URL = this.baseUrl + `game/${id}`;
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  create(body: any): Observable<any> {
    const URL = this.baseUrl + `game`;
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);
    return this.http.post(URL, body, { headers }).pipe(map((res) => res));
  }

  updateMarker(body: any): Observable<any> {
    const URL = this.baseUrl + `game/updateMarker`;
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);
    return this.http.post(URL, body, { headers }).pipe(map((res) => res));
  }
}
