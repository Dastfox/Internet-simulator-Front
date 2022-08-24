import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Guid } from 'guid-typescript';
import { ImageFile, ImageData, ImagesRepository } from '@front-nx/images/state';

@Component({
  selector: 'front-nx-images-add',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './images-add.component.html',
  styleUrls: ['./images-add.component.css'],
})
export class ImagesAddComponent {
  fileToUpload: File | null = null;
  constructor(private _imageRepository: ImagesRepository) {}

  /**
   *
   * @param url string from html input
   * @returns the repo method to add a link
   */

  addImage(files: FileList | null): void {
    // const file = this.files.item(0)
    this.fileToUpload = files!.item(0);
    const guidRandomID = Guid.create();
    const guidRandomIDString = guidRandomID.toString();

    // if link doesn't exists security
    const newImage: ImageData = {
      id: guidRandomIDString,
      name: this.fileToUpload!.name,
    };
    const newFile: ImageFile = {
      id: newImage.id,
      name: newImage.name,
      file: this.fileToUpload!,
    };
    this._imageRepository.addImage(newFile, newImage);
    console.log(newFile);
  }
}
