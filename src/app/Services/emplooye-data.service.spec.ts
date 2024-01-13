import { TestBed } from '@angular/core/testing';

import { EmplooyeDataService } from './emplooye-data.service';

describe('EmplooyeDataService', () => {
  let service: EmplooyeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmplooyeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
