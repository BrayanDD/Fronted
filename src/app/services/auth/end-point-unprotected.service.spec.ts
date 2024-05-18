import { TestBed } from '@angular/core/testing';

import { EndPointUnprotectedService } from './end-point-unprotected.service';

describe('EndPointUnprotectedService', () => {
  let service: EndPointUnprotectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndPointUnprotectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
