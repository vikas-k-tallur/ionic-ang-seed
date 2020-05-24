import { TestBed } from '@angular/core/testing';

import { SecureGuard } from './secure.guard';

describe('SecureGuard', () => {
  let guard: SecureGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SecureGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
