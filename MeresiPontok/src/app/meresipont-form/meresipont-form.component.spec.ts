import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeresipontFormComponent } from './meresipont-form.component';

describe('MeresipontFormComponent', () => {
  let component: MeresipontFormComponent;
  let fixture: ComponentFixture<MeresipontFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeresipontFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeresipontFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
