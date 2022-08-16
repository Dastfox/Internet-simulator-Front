import { TestBed } from '@angular/core/testing';

import { LinkCrudService } from './link-crud.service';

describe('HeroService', () => {
  let service: LinkCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});