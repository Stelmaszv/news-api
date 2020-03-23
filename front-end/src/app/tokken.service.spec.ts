import { TestBed, inject } from '@angular/core/testing';

import { TokkenService } from './tokken.service';

describe('TokkenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokkenService]
    });
  });

  it('should be created', inject([TokkenService], (service: TokkenService) => {
    expect(service).toBeTruthy();
  }));
});
