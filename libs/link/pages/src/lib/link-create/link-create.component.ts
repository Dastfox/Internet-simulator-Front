import { Component, OnInit } from '@angular/core';
import { LinkRepository } from '@front-nx/link/state';
import { Link } from '@front-nx/link/state';

@Component({
  selector: 'front-nx-link-create',
  templateUrl: './link-create.component.html',
  styleUrls: ['./link-create.component.css'],
})
export class LinkCreateComponent {
  links : Link[] = [];
  constructor(private linkRepository: LinkRepository) {}

  ngOnInit(): void {}
  
  addLink(url: string): void {
    url = url.trim();
    if (!url) { return; }
    const newLink: Link = {
      id: url,
      url    
    }
    this.linkRepository.addLink(newLink)
    };
  }


