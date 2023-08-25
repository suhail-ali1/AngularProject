import { TestBed } from '@angular/core/testing';

import { ISRODATAService } from './isro-data.service';

describe('ISRODATAService', () => {
  let service: ISRODATAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ISRODATAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
