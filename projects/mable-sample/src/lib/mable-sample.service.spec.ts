import { TestBed } from '@angular/core/testing';

import { MableSampleService } from './mable-sample.service';

describe('MableSampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MableSampleService = TestBed.get(MableSampleService);
    expect(service).toBeTruthy();
  });
});
