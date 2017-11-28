import { TestBed, inject } from '@angular/core/testing';

import { BlogGuardService } from './blog-guard.service';

describe('BlogGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogGuardService]
    });
  });

  it('should be created', inject([BlogGuardService], (service: BlogGuardService) => {
    expect(service).toBeTruthy();
  }));
});
