import { TestBed } from '@angular/core/testing';

import { EndPointProtectedService } from './end-point-protected.service';

describe('EndPointProtectedService', () => {
  let service: EndPointProtectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndPointProtectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
