import { TestBed, inject } from '@angular/core/testing';

import { PosService } from './pos.service';

describe('PosServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PosService]
    });
  });

  it('should be created', inject([PosService], (service: PosService) => {
    expect(service).toBeTruthy();
  }));
});
