import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Hiba } from '../models/hiba';
import { Homero } from '../models/homero';
import { Meres } from '../models/meres';
//import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeroService {

  constructor(private http: HttpClient) {}


  getHomerok() {
    return lastValueFrom(this.http.get<Homero[]>('/api/homerok'));
  }
  getHibak() {
    return lastValueFrom(this.http.get<Hiba[]>('/api/hibak'));
  }
  /*
  getHomero(id: number) {
    return lastValueFrom(this.http.get<Homero[]>('/api/homerok/&(id)'));
  }
  */
  createHomero(homero: Homero) {
    return lastValueFrom(this.http.post<Homero>('/api/homerok', homero));
  }

  /*
  deleteHomero(id: number) {
    return lastValueFrom(this.http.delete<Homero>('/api/homerok/&(id)'));
  }*/

  createMeres(meres: Meres) {
    return lastValueFrom(this.http.post<Meres>('/api/meresek', meres));
  }
  createHiba(hiba: Hiba) {
    return lastValueFrom(this.http.post<Hiba>('/api/hibak', hiba));
  }

}
