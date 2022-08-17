import { Component, OnInit } from '@angular/core';
import { Link } from '@front-nx/link/state'

@Component({
  selector: 'front-nx-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css'],
})
export class LinkListComponent implements OnInit {
  links : Link[] = [];
  constructor() {}

  ngOnInit(): void {}
}
