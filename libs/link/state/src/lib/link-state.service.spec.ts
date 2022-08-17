import { TestBed } from '@angular/core/testing';

import { LinkStateService } from './link-state.service';

describe('LinkStateService', () => {
  let service: LinkStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
