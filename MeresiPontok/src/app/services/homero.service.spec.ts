import { TestBed } from '@angular/core/testing';

import { HomeroService } from './homero.service';

describe('ServicesService', () => {
  let service: HomeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
