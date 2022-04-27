import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzenzorComponent } from './szenzor.component';

describe('SzenzorComponent', () => {
  let component: SzenzorComponent;
  let fixture: ComponentFixture<SzenzorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzenzorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SzenzorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
