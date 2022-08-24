import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesRandomComponent } from './images-random.component';

describe('ImagesRandomComponent', () => {
  let component: ImagesRandomComponent;
  let fixture: ComponentFixture<ImagesRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagesRandomComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImagesRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
