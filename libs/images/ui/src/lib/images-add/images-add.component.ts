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




  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(`onFileSelected(${file.name})`);

    if (file) {
      const formData = new FormData();
      formData.append('formData', file);
      console.log('upload done?');
      this._imageRepository.addImage(formData);
      console.log(formData);
    }}




}

