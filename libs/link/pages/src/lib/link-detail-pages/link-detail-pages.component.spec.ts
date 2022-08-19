import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDetailPagesComponent } from './link-detail-pages.component';

describe('LinkDetailPagesComponent', () => {
  let component: LinkDetailPagesComponent;
  let fixture: ComponentFixture<LinkDetailPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkDetailPagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkDetailPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
