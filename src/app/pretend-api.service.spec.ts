import { TestBed } from '@angular/core/testing';

import { PretendAPIService } from './pretend-api.service';

describe('PretendAPIService', () => {
  let service: PretendAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PretendAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
