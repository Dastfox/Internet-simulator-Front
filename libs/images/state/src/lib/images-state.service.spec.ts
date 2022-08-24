import { TestBed } from '@angular/core/testing';

import { ImagesStateService } from './images-state.service';

describe('ImagesStateService', () => {
  let service: ImagesStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
