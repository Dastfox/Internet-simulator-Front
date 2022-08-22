import { Component, OnInit } from '@angular/core';
import { Link } from '@front-nx/link/state';
import { LinkRepository } from '@front-nx/link/state';

@Component({
  selector: 'front-nx-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css'],
})
export class LinkListComponent implements OnInit {
  links: Link[] = [];

  constructor(
    private _linkRepository: LinkRepository,
  ) {}

  /**
   * Gets links as the comp is created
   */
  ngOnInit(): void {
    this.getLinks();
  }

  /**
   * suscribes the links getted from the repo logs in console
   */
  getLinks() {
    this._linkRepository.getLinksFromStore().subscribe((links) => {
      this.links = links;
      console.log(this.links);
    });
  }

  /**
   * deletes links corresponding to Id attached to the link
   * consoles returs ID 
   * @param id getted from html 
   */
  deleteLink(id: string) {
    this._linkRepository.deleteLink(id)
      console.log(id);
    };
  }

