import { Component, OnInit } from '@angular/core';
import { Link } from '@front-nx/link/state';
import { LinkRepository } from '@front-nx/link/state';



@Component({
  selector: 'front-nx-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css'],
})
export class LinkListComponent implements OnInit {
  links : Link[] = [];

  constructor(private linkRepository: LinkRepository) {}

  ngOnInit(): void {
    this.getLinks();
  }
  
  getLinks(): void {
    this.linkRepository.getLinks()
    .subscribe((links) => this.links = links);
  }
}