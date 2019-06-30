import { TestBed } from '@angular/core/testing';

import { NiveauEtudeService } from './niveau-etude.service';

describe('NiveauEtudeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NiveauEtudeService = TestBed.get(NiveauEtudeService);
    expect(service).toBeTruthy();
  });
});
