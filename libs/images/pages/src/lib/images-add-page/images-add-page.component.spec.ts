import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesAddPageComponent } from './images-add-page.component';

describe('ImagesAddPageComponent', () => {
  let component: ImagesAddPageComponent;
  let fixture: ComponentFixture<ImagesAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagesAddPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImagesAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
