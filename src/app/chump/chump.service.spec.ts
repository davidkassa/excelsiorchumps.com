/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChumpService } from './chump.service';

describe('ChumpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChumpService]
    });
  });

  it('should ...', inject([ChumpService], (service: ChumpService) => {
    expect(service).toBeTruthy();
  }));
});
