import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'apps/links/src/app/app-routing.module';
import { ImagesRandomComponent } from '@front-nx/images/ui';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'front-nx-images-random-page',
  standalone: true,
  imports: [CommonModule, ImagesRandomComponent, RouterModule],
  templateUrl: './images-random-page.component.html',
  styleUrls: ['./images-random-page.component.css'],
})
export class ImagesRandomPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
