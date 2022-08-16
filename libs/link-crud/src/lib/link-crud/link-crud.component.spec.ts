import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCrudComponent } from './link-crud.component';

describe('LinkCrudComponent', () => {
  let component: LinkCrudComponent;
  let fixture: ComponentFixture<LinkCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkCrudComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
