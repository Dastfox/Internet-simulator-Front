import { Component, OnInit } from '@angular/core';
import { Link } from '@front-nx/link/state';
import { LinkRepository } from '@front-nx/link/state';
import { LinkStateService } from 'libs/link/state/src/lib/link-state.service';

@Component({
  selector: 'front-nx-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css'],
})
export class LinkListComponent implements OnInit {
  links: Link[] = [];

  constructor(
    private linkRepository: LinkRepository,
    linkStateService: LinkStateService
  ) {}

  ngOnInit(): void {
    this.getLinks();
  }

  getLinks() {
    this.linkRepository.getLinks().subscribe((links) => {
      this.links = links;
      console.log(this.links);
    });
  }

  // deleteLink(id: number) {
  //   const LinkToDelete: Link = {
  //     url: "",
  //     guid: "",
  //     id,
  //   };
  //   this.linkRepository.deleteLink(LinkToDelete)
  //     console.log(LinkToDelete);
  //   };
  }

