import { Component, OnInit } from '@angular/core';
import { Link } from '@front-nx/link/state';
import { ActivatedRoute } from '@angular/router';
import { LinkRepository } from '@front-nx/link/state';
import { Location } from '@angular/common';

@Component({
  selector: 'front-nx-link-detail',
  templateUrl: './link-detail.component.html',
  styleUrls: ['./link-detail.component.css'],
})
export class LinkDetailComponent implements OnInit {
  link: Link | undefined;

  constructor(
    private _route: ActivatedRoute,
    private _linkRepository: LinkRepository,
  ) {}

  /**
   * Gets a link on init
   */
  ngOnInit(): void {
    this.getLink();
  }

  /**
   * gets the id corresponding to the route
   * gets the link from that id using the repo, suscribes it 
   * logs the object  
   */
  getLink(): void {
    const id = String(this._route.snapshot.paramMap.get('id'));
    this._linkRepository.getLinkFromStore(id).subscribe((link) => {
      this.link = link;
      console.log(this.link);
    });
  }

/**
 * gets the id corresponding to the route
 * @param url  from html input, trims it
 * @returns the repo method to add a link
 */
  updateLink(url: string): void {
    url = url.trim();
    const id = String(this._route.snapshot.paramMap.get('id'));
    // if link doesn't exists security
    if (!url) {
      return;
    }
    // declares an object formed by trimmed url and id from route
    const UpdatedLink: Link = {
      url,
      id,
    };
    this._linkRepository.updateLink(id, UpdatedLink);
  }

}
