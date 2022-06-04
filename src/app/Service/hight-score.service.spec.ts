import { TestBed } from '@angular/core/testing';

import { HightScoreService } from './hight-score.service';

describe('HightScoreService', () => {
  let service: HightScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HightScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
