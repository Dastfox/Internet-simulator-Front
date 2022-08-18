import { Component, OnInit } from '@angular/core';
import { Link } from '@front-nx/link/state';
import { ActivatedRoute } from '@angular/router';
import { LinkRepository } from '@front-nx/link/state';

@Component({
  selector: 'front-nx-link-detail',
  templateUrl: './link-detail.component.html',
  styleUrls: ['./link-detail.component.css'],
})
export class LinkDetailComponent implements OnInit {
  link: Link | undefined;

  constructor(
    private route: ActivatedRoute,
    private linkRepository: LinkRepository,
    private location: Location
  ) {}

  ngOnInit(): void {
  }
}
