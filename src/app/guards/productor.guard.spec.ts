import { TestBed } from '@angular/core/testing';

import { ProductorGuard } from './productor.guard';

describe('ProductorGuard', () => {
  let guard: ProductorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
