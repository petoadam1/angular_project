import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeresipontComponent } from './meresipont.component';

describe('MeresipontComponent', () => {
  let component: MeresipontComponent;
  let fixture: ComponentFixture<MeresipontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeresipontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeresipontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
