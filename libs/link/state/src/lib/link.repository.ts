import { Injectable } from '@angular/core';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';
import { createStore, withProps, select } from '@ngneat/elf';

import {	selectAllEntities, withEntities, addEntities } from '@ngneat/elf-entities';
import { Observable } from 'rxjs';
const storeName = 'links';



export interface Link {
  id : string;
  url : string;
} 

@Injectable({  providedIn: 'root'})


export class LinkRepository { 
	link : Observable<Link[]>;
	private store;
  private _persist;

	constructor() {
		this.store = this.createStore();
		this.link = this.store.pipe(selectAllEntities());
    this._persist = persistState(this.store, {
			key: storeName,
			storage: localStorageStrategy,
		});
    // get > fastapi
}
 
private createStore(): typeof store {
  const store = 
  createStore({ name: 'linkStore' },
  withEntities<Link>());
  
  return store;
}

addLink(link: Link) {
  this.store.update(addEntities(link));
}

getLinks(){
  return this.store.pipe(selectAllEntities())
}

}
