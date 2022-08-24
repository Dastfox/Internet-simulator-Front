import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Link, LinkRepository } from '@front-nx/link/state';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'front-nx-link-detail',
  templateUrl: './link-detail.component.html',
  styleUrls: ['./link-detail.component.css'],
})
export class LinkDetailComponent {
  link: Link | undefined;
  private _linkId?: string;
  public get linkId() {
    return this._linkId;
  }
  public set linkId(newLinkId) {
    this._linkId = newLinkId;
    if (!newLinkId) return;
    this._linkRepository
      .getLinkFromStore(newLinkId)
      .pipe(
        switchMap((link) => {
          this.link = link;
          return of(undefined);
        })
      )
      .subscribe();
  }

  constructor(
    private _route: ActivatedRoute,
    private _linkRepository: LinkRepository
  ) {
    this.linkId = this._route.snapshot.paramMap.get('id') ?? undefined;
  }

  /**
   * gets the id corresponding to the route
   * @param url  from html input, trims it
   * @returns the repo method to add a link
   */
  updateLink(url: string): void {
    url = url.trim();
    // if link doesn't exists security
    if (!url || !this.linkId) {
      return;
    }
    // declares an object formed by trimmed url and id from route
    const UpdatedLink: Link = {
      url,
      id: this.linkId,
    };
    this._linkRepository.updateLink(this.linkId, UpdatedLink);
  }
}
