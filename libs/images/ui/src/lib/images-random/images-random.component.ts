import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageData, ImagesRepository } from '@front-nx/images/state';
import { ImagesStateService } from '@front-nx/images/state';

@Component({
  selector: 'front-nx-images-random',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './images-random.component.html',
  styleUrls: ['./images-random.component.css'],
})
export class ImagesRandomComponent {
  images: ImageData[] = [];
  _imageToShow: any;
  _isImageLoading: any;
  constructor(
    private _imagesRepository: ImagesRepository,
    private _imagesStateService: ImagesStateService,
  ) {
    this._imagesRepository.getImagesFromStore$().subscribe((images) => {
      this.images = images;
      console.log(this.images);
    });
    this._imageToShow = this.getImageFromService();
}
getImageFromService() {

  this._isImageLoading = true;
  this._imagesStateService.getRandomImageFromServer()
  .subscribe(data => {
    this.createImageFromBlob(data);
    this._isImageLoading = false;
  }, error => {
    this._isImageLoading = false;
    console.log(error);
  });
}
createImageFromBlob(image:Blob) {
  let reader = new FileReader();
  reader.addEventListener("load", () => {
     this._imageToShow = reader.result;
  }, false);

  if (image) {
     reader.readAsDataURL(image);
  }
}

}
