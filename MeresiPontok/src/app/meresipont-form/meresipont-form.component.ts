import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HomeroService } from '../services/homero.service';

@Component({
  selector: 'app-meresipont-form',
  templateUrl: './meresipont-form.component.html',
  styleUrls: ['./meresipont-form.component.css']
})
export class MeresipontFormComponent implements OnInit {

  homeroForm: FormGroup = this.formBuilder.group({
    id: [null],
    hely: [''/*megadott alapértelmezett beírt értéket jelenti*/, 
    [Validators.required] ], //mindenképp ki kell tölteni, Validators.pattern()] //YYYY-MM-DD */],
    mertekegyseg: ['Celsius'],
    min: ['0'],
    max: ['100'],
    alsohiba: ['5'],
    felsohiba: ['95']
  });

  constructor(private homeroService: HomeroService,
    private formBuilder: FormBuilder
    /*ezt a formbuilder-t egy termék beillesztéséhez írtuk be*/) { }

  get hely() {
    return this.homeroForm.get('hely');
  }

  get mertekegyseg() {
    return this.homeroForm.get('mertekegyseg');
  }
  get min() {
    return this.homeroForm.get('min');
  }
  get max() {
    return this.homeroForm.get('max');
  }
  get alsohiba() {
    return this.homeroForm.get('alsohiba');
  }
  get felsohiba() {
    return this.homeroForm.get('felsohiba');
  }

  successMessage = '';
  errorMessage = '';

  ngOnInit(): void {
  }

  async saveHomero() {
    try {
      
      const product = await this.homeroService.createHomero(this.homeroForm.value);
    } catch (err) {
      console.error(err);
    }
  }

}
