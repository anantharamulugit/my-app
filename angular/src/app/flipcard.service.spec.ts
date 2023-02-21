import { TestBed } from '@angular/core/testing';

import { FlipcardService } from './flipcard.service';

describe('FlipcardService', () => {
  let service: FlipcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
