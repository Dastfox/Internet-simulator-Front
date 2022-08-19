import { Component, OnInit } from '@angular/core';
import { LinkRepository } from '@front-nx/link/state';
import { LinkStateService } from 'libs/link/state/src/lib/link-state.service';
import { Link } from '@front-nx/link/state';

@Component({
  selector: 'front-nx-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})

export class CounterComponent implements OnInit {
  links: Link[] = [];
  public counter;

  constructor(    
    private linkRepository: LinkRepository,
    private linkStateService: LinkStateService) {
    this.counter = this.getLinksCount();
    }

  ngOnInit(): void {
    this.getLinksCount();
  }
  
  getLinksCount() { 
    return this.linkRepository.getLinksCount()
  };
  }

