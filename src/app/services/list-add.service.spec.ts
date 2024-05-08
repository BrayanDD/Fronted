import { TestBed } from '@angular/core/testing';

import { ListAddService } from './list-add.service';

describe('ListAddService', () => {
  let service: ListAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
