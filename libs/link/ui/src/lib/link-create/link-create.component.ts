import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';

import { LinkRepository } from '@front-nx/link/state';
import { Link } from '@front-nx/link/state';

@Component({
  selector: 'front-nx-link-create',
  templateUrl: './link-create.component.html',
  styleUrls: ['./link-create.component.css'],
})
export class LinkCreateComponent {
  // collection of Link
  links: Link[] = [];
  
  private _guidRandomID: Guid;
  private _guidRandomIDString: string;
  constructor(
    private _linkRepository: LinkRepository,
  ) {
    // unique id 32 char
    this._guidRandomID = Guid.create();
    // transforms guid format to string format
    this._guidRandomIDString = this._guidRandomID.toString();
  }

/**
 * 
 * @param url string from html input
 * @returns the repo method to add a link
 */
  addLink(url: string): void {
    url = url.trim();
    // if link doesn't exists security
    if (!url) {
      return;
    }
    // declares an object formed by trimmed url and id generated in constructor
    const newLink: Link = {
      url,
      id: this._guidRandomIDString,

    };
    this._linkRepository.addLink(newLink);
  }
}
