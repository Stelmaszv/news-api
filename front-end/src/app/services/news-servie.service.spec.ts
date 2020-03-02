import { TestBed, inject } from '@angular/core/testing';

import { NewsServieService } from './news-servie.service';

describe('NewsServieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsServieService]
    });
  });

  it('should be created', inject([NewsServieService], (service: NewsServieService) => {
    expect(service).toBeTruthy();
  }));
});
