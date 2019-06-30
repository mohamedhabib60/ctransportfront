import { TestBed } from '@angular/core/testing';

import { SalaireService } from './salaire.service';

describe('SalaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalaireService = TestBed.get(SalaireService);
    expect(service).toBeTruthy();
  });
});
