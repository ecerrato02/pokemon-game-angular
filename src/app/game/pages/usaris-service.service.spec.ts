import { TestBed } from '@angular/core/testing';

import { UsarisServiceService } from './usaris-service.service';

describe('UsarisServiceService', () => {
  let service: UsarisServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsarisServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
