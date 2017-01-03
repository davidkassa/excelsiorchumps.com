/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChumpCountService } from './chump-count.service';

describe('ChumpCountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChumpCountService]
    });
  });

  it('should ...', inject([ChumpCountService], (service: ChumpCountService) => {
    expect(service).toBeTruthy();
  }));
});
