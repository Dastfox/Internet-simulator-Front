import { Component } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Link, LinkRepository } from '@front-nx/link/state';

@Component({
  selector: 'front-nx-link-create',
  templateUrl: './link-create.component.html',
  styleUrls: ['./link-create.component.css'],
  standalone: true,
})
export class LinkCreateComponent {
  // collection of Link
  links: Link[] = [];

  // private _guidRandomID: Guid;
  // private _guidRandomIDString: string;
  constructor(private _linkRepository: LinkRepository) {}

  /**
   *
   * @param url string from html input
   * @returns the repo method to add a link
   */
  addLink(url: string): void {
    const guidRandomID = Guid.create();
    const guidRandomIDString = guidRandomID.toString();
    url = url.trim();
    // if link doesn't exists security
    if (!url) {
      return;
    }

    const newLink: Link = {
      url,
      id: guidRandomIDString,
    };
    this._linkRepository.addLink(newLink);
  }
}
