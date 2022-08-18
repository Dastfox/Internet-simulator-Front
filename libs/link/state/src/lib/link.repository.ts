import { Injectable, OnInit } from '@angular/core';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';
import { createStore, withProps, select } from '@ngneat/elf';
import {	selectAllEntities, withEntities, addEntities, setEntities } from '@ngneat/elf-entities';
import { Observable } from 'rxjs';
import { LinkStateService } from 'libs/link/state/src/lib/link-state.service';

import {
  withRequestsStatus,
  withRequestsCache,
  createRequestDataSource,
} from '@ngneat/elf-requests';



const storeName = 'links';



export interface Link {
  Guid : string;
  url : string;
} 

@Injectable({  providedIn: 'root'})


export class LinkRepository { 



  links : Link[] = [];
	link : Observable<Link[]>;
	private store;
  private persist;

	constructor(private linkStateService : LinkStateService,) {
		this.store = this.createStore();
		this.link = this.store.pipe(selectAllEntities());
    this.fetchLinksFromServer();
    // this.link.subscribe(links => this.links = links);
    this.persist = persistState(this.store, {
			key: storeName,
			storage: localStorageStrategy,
		}
    );
}
 
private createStore(): typeof store {
  const store = 
  createStore({ name: 'linkStore' },
  withEntities<Link, 'Guid'>({idKey: 'Guid'}),); 
  return store;
}

addLink(link: Link) {
  this.store.update(addEntities(link));
  }

getLinks(){
  return this.store.pipe(selectAllEntities())
  }

deleteLink(link: Link) {
  // delete locally
  // delete onserver
}

fetchLinksFromServer(){
  this.linkStateService.getLinksFS()
  .subscribe(links => this.links = links);
  this.store.update(setEntities(this.links))
}


}
