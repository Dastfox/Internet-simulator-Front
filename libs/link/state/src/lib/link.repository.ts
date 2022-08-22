import { Injectable, OnInit } from '@angular/core';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';
import { createStore, withProps, select } from '@ngneat/elf';
import {
  selectAllEntities,
  withEntities,
  addEntities,
  setEntities,
  deleteEntities,
  getEntitiesCount,
  getEntity,
  selectEntity,
  deleteAllEntities,
  updateAllEntities,
  getEntitiesIds,
  updateEntities,
} from '@ngneat/elf-entities';
import { Observable } from 'rxjs';
import { LinkStateService } from 'libs/link/state/src/lib/link-state.service';

import {
  withRequestsStatus,
  withRequestsCache,
  createRequestDataSource,
} from '@ngneat/elf-requests';

const storeName = 'links';

export interface Link {
  url: string;
  id: string;
}

@Injectable({ providedIn: 'root' })
export class LinkRepository {
  links: Link[] = [];
  link: Observable<Link[]>;
  private store;
  private persist;

  constructor(private linkStateService: LinkStateService) {
    this.store = this.createStore();
    this.link = this.store.pipe(selectAllEntities());
    this.fetchLinksFromServer();
    this.persist = persistState(this.store, {
      key: storeName,
      storage: localStorageStrategy,
    });
  }

  private createStore(): typeof store {
    const store = createStore(
      { name: 'linkStore' },
      withEntities<Link>({ idKey: 'id' })
    );
    return store;
  }

  addLink(newLink: Link) {
    this.store.update(addEntities(newLink));
    this.linkStateService.addLinksFromServer(newLink).subscribe((link) => {
      this.links.push(link);
      console.log(this.link);
    });
  }

  getLinks() {
    return this.store.pipe(selectAllEntities());
  }

  getLink(id: string) {
    return this.store.pipe(selectEntity(id));
  }

  deleteLink(id: string) {
    // delete locally
    this.store.update(deleteEntities(id));
    // delete onserver
    this.linkStateService.deleteLinkFromServer(id).subscribe((link) => {
      this.links.push(link);
    });
  }

  fetchLinksFromServer() {
    this.linkStateService.getDataFromServer<Link>().subscribe((links) => {
      this.links = links;
      this.store.update(setEntities(this.links));
    });
  }

  getLinksCount() {
    return this.store.query(getEntitiesCount());
  }

  updateLink(link: Link, id: string) {
    // update onserver
    this.linkStateService.updateLinkOnServer(link, id).subscribe((link) => {
      this.links.push(link);
      console.log(link);
    // update locally
    }
    )
    this.store.update(updateEntities(id, {url :link.url}));
    console.log(link.url);
  }
}
