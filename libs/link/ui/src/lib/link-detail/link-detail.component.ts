import { Component, OnInit } from '@angular/core';
import { Link } from '@front-nx/link/state';
import { LinkStateService } from 'libs/link/state/src/lib/link-state.service';
import { ActivatedRoute } from '@angular/router';
import { elementAt, observable } from 'rxjs';
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
    private route: ActivatedRoute,
    private linkStateService: LinkStateService,
    private linkRepository: LinkRepository,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getLink();
  }

  getLink(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.linkRepository.getLink(id).subscribe((link) => {
      this.link = link;
      console.log(this.link);
    });
  }
  
  UpdateLink(url: string): void {
    url = url.trim();
    const id = String(this.route.snapshot.paramMap.get('id'));
    if (!url) {
      return;
    }
    const UpdatedLink: Link = {
      url,
      id,
    };
    this.linkRepository.updateLink(id, UpdatedLink);
  }

}
