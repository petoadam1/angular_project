import { Component, Input, OnInit } from '@angular/core';
import { Hiba } from 'src/app/models/hiba';

@Component({
  selector: 'app-hiba',
  templateUrl: './hiba.component.html',
  styleUrls: ['./hiba.component.css']
})
export class HibaComponent implements OnInit {

  @Input()
  hiba!: Hiba;

  constructor() { }

  ngOnInit(): void {
  }

}
