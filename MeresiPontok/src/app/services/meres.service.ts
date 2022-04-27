import { Injectable } from '@angular/core';
import { Meres } from '../models/meres';

@Injectable({
  providedIn: 'root'
})
export class MeresService {

  datas: Meres[] = [];

  constructor() { }

  randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getMeres(): Meres[] {
    this.datas.push({
      homeroid: 1,
      mertertek: this.randomIntFromInterval(1, 100)
    });
    return this.datas;
  }
}
