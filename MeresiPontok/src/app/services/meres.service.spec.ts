import { TestBed } from '@angular/core/testing';

import { MeresService } from './meres.service';

describe('MeresService', () => {
  let service: MeresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
