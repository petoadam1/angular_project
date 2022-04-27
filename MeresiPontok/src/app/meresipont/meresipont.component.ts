import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Hiba } from '../models/hiba';
import { Homero } from '../models/homero';
import { HomeroService } from '../services/homero.service';

@Component({
  selector: 'app-meresipont',
  templateUrl: './meresipont.component.html',
  styleUrls: ['./meresipont.component.css']
})
export class MeresipontComponent implements OnInit {

  homerok: Homero[] = [];
  hibak: Hiba[] = [];
  constructor( private homeroService: HomeroService) { }

  query: string = '';

  async ngOnInit() {
    try {
      this.homerok = await this.homeroService.getHomerok();
      this.hibak = await this.homeroService.getHibak();
      console.log(this.homerok[0].hely);
    } catch (err) {
      console.error(err);
    }
  }

  /*
  async search() {
    try {
      this.homerok = await this.homeroService.searchHomero(this.query);
    } catch (err) {
      console.error(err);
    }
  }
  */
}
