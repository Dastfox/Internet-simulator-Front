import { Component, OnInit } from '@angular/core';
import { LinkRepository } from '@front-nx/link/state';
import { Link } from '@front-nx/link/state';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'front-nx-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  links: Link[] = [];
  public counter$: Observable<number>;
  public counter =  0;

  constructor(private _linkRepository: LinkRepository) {
    // methode 1: donnée manipulable
    this._linkRepository.counter$.pipe(tap((counter) => {this.counter = counter})).subscribe(); 
    // methode 2: donnée only 
    this.counter$ = this._linkRepository.counter$;
  }


}
