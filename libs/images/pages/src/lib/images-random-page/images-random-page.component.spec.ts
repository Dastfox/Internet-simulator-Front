import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesRandomPageComponent } from './images-random-page.component';

describe('ImagesRandomPageComponent', () => {
  let component: ImagesRandomPageComponent;
  let fixture: ComponentFixture<ImagesRandomPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagesRandomPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImagesRandomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
