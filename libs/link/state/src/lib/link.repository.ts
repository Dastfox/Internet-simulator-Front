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
  selectEntity
} from '@ngneat/elf-entities';
import { Observable } from 'rxjs';
import { LinkStateService } from 'libs/link/state/src/lib/link-state.service';

import {
  withRequestsStatus,
  withRequestsCache,
  createRequestDataSource,
} from '@ngneat/elf-requests';

const storeName = 'linkStore';

export interface Link {
  url: string;
  guid: string;
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
      withEntities<Link, 'guid'>({ idKey: 'guid' })
    );
    return store;
  }

  addLink(newLink: Link) {
    this.store.update(addEntities(newLink));
    this.linkStateService.addLinksFS(newLink).subscribe((link) => {
      this.links.push(link);
    });
  }

  getLinks() {
    return this.store.pipe(selectAllEntities());
  }

  getLink(id : string) {
    return this.store.pipe(selectEntity(id));
  }

  deleteLink(id: string) {
    // delete locally
    this.store.update(deleteEntities(id));
    // delete onserver
    this.linkStateService.deleteLinkFS(id).subscribe((link) => {
      this.links.push(link);
    });
  }

  fetchLinksFromServer() {
    this.linkStateService
      .getLinksFS()
      .subscribe((links) => (this.links = links));
    this.store.update(setEntities(this.links));
  }

  getLinksCount() {
    return this.store.query(getEntitiesCount());
  }
}
