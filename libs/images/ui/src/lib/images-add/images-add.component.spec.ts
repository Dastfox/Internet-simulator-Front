import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesAddComponent } from './images-add.component';

describe('ImagesAddComponent', () => {
  let component: ImagesAddComponent;
  let fixture: ComponentFixture<ImagesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagesAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImagesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
