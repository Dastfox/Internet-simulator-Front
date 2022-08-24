import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesAddComponent } from '@front-nx/images/ui';

@Component({
  selector: 'front-nx-images-add-page',
  standalone: true,
  imports: [CommonModule, ImagesAddComponent],
  templateUrl: './images-add-page.component.html',
  styleUrls: ['./images-add-page.component.css'],
})
export class ImagesAddPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
