import { Component, OnInit } from '@angular/core';
import { Link } from '../../../../../apps/links/Link';


@Component({
  selector: 'front-nx-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['../../../../../apps/links/src/app/app.component.css'],
})
export class LinkListComponent implements OnInit {
  links : Link[] = [];
  constructor() {}

  ngOnInit(): void {
  }
}

