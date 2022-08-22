import { Component, OnInit } from '@angular/core';
import { LinkRepository } from '@front-nx/link/state';
import { Link } from '@front-nx/link/state';

@Component({
  selector: 'front-nx-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  links: Link[] = [];
  public counter;

  constructor(private _linkRepository: LinkRepository) {
    this.counter = this.getLinksCount();
  }

  /**
   * 
   * @returns links count from repo method 
   */
  getLinksCount() {
    return this._linkRepository.getLinksCountFromStore();
  }
}
