import { TestBed } from '@angular/core/testing';

import { FirebaseactionsService } from './firebaseactions.service';

describe('FirebaseactionsService', () => {
  let service: FirebaseactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
