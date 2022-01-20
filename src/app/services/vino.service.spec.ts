import { TestBed } from '@angular/core/testing';

import { VinoService } from './vino.service';

describe('VinoService', () => {
  let service: VinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
