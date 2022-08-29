import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ImageData, ImagesRepository } from '@front-nx/images/state';
import { ImagesStateService } from '@front-nx/images/state';
import { getEntitiesIds } from '@ngneat/elf-entities';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'front-nx-images-random',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './images-random.component.html',
  styleUrls: ['./images-random.component.css'],
})
export class ImagesRandomComponent {
  images: ImageData[] = [];
  _imageSelected?: ImageData;
  _imageUploaded?: string | ArrayBuffer | null;
  _isImageLoading: boolean = false;

  constructor(
    private _imagesRepository: ImagesRepository,
    private _imagesStateService: ImagesStateService
  ) {
    this._imagesRepository.getImagesFromStore$().subscribe((images) => {
      this.images = images;
      console.log(this.images);
    });
    this.getRandomImage();
  }

  getRandomImage(): void {
    this._imagesRepository
      .getImagesFromStore$()
      .pipe(
        tap((image) => {
          this.images.push(...image);
        })
      )
      .subscribe();
    const random = Math.floor(Math.random() * this.images.length);
    const imagePicked = this.images[random];
    if (!imagePicked) return;
    this.getRandomImageFromService(imagePicked.id);
  }

  getRandomImageFromService(id: string) {
    this._isImageLoading = true;
    this._imagesStateService
      .getImagebyIdFromServer(id)
      .pipe(
        tap((data) => {
          if (!data) this._isImageLoading = true;
          this.createImageFromBlob(data);
          this._isImageLoading = false;
        })
      )
      .subscribe();
  }
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this._imageUploaded = reader.result;
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }
}
