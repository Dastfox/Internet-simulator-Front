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
  constructor(private _imageRepository: ImagesRepository) {}

  uploadedImage: File | null = null;

  // public onImageUpload(event: any) {
  //   this.uploadedImage = event.target.files[0];
  // }

  /**
   *
   * @param url string from html input
   * @returns the repo method to add a link
   */

  //   addImage( ): void {
  //     // const file = this.files.item(0)
  //     const guidRandomID = Guid.create();
  //     const guidRandomIDString = guidRandomID.toString();
  //     const imageFormData = new FormData();
  //     imageFormData.append(
  //       'image',
  //       this.uploadedImage!,
  //       this.uploadedImage!.name
  //     );
  //     // if link doesn't exists security
  //     // const newImage: ImageData = {
  //     //   id: guidRandomIDString,
  //     //   name: this.fileToUpload!.name,
  //     // };
  //     // const newFile: ImageFile = {
  //     //   id: newImage.id,
  //     //   name: newImage.name,
  //     //   file: this.fileToUpload!,
  //     // };
  //     this._imageRepository.addImage(imageFormData, guidRandomIDString);
  //     console.log(imageFormData, guidRandomIDString);
  //   }

  onFileSelected(event: any) {
    const guidRandomID = Guid.create();
    const id = guidRandomID.toString();
    const file: File = event.target.files[0];
    console.log(`onFileSelected(${file.name})`);

    if (file) {
      const fileName = file.name;
      const formData = new FormData();
      formData.append('formData', file);
      formData.append('id', id);
      console.log('upload done?');
      this._imageRepository.addImage(formData);
      console.log(formData);
            
    }}




}

