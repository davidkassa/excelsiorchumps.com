/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChumpDayService } from './chump-day.service';

describe('ChumpDayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChumpDayService]
    });
  });

  it('should ...', inject([ChumpDayService], (service: ChumpDayService) => {
    expect(service).toBeTruthy();
  }));
});
