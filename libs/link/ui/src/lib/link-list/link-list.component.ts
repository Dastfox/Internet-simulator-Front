import { Component } from '@angular/core';
import { Link, LinkRepository } from '@front-nx/link/state';

@Component({
  selector: 'front-nx-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css'],
})
export class LinkListComponent{
  links: Link[] = [];

  constructor(
    private _linkRepository: LinkRepository,
  ) {
    this._linkRepository.getLinksFromStore$().subscribe((links) => {
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

