import { Component, OnInit } from '@angular/core';
import { Link } from '@front-nx/link/state';
import { LinkRepository } from '@front-nx/link/state';
import { addEntities } from '@ngneat/elf-entities';
import { LinkStateService } from 'libs/link/state/src/lib/link-state.service';



@Component({
  selector: 'front-nx-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css'],
})
export class LinkListComponent implements OnInit {
  links : Link[] = [];

  constructor(private linkRepository: LinkRepository, private linkStateService: LinkStateService) {}

  ngOnInit(): void {
    this.getLinks();
  }
  
  getLinks(): void {
    // this.linkStateService.getLinksFS()
    // .subscribe(links => this.links = links);
    this.linkRepository.getLinks()
    .subscribe(links => this.links = links);
  }
  
}
