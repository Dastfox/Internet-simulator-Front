import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { createStore } from '@ngneat/elf';
import {
  addEntities, deleteEntities,
  getEntitiesCount, selectAllEntities, selectEntity, setEntities, updateEntities, withEntities
} from '@ngneat/elf-entities';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';
import { LinkStateService } from './link-state.service';
import { Observable, tap, map } from 'rxjs';

const storeName = 'links';

export interface Link {
  url: string;
  id: string;
}

@Injectable({ providedIn: 'root' })
export class LinkRepository {
  links: Link[] = [];
  links$: Observable<Link[]>;
  counter$: Observable<number>;
  private _store;
  private _persist;

  constructor(
    private _linkStateService: LinkStateService,
    private _location: Location
  ) {
    this._store = this.createStore();
    this.links$ = this._store.pipe(selectAllEntities());
    this.counter$ = this.links$.pipe(map((links)=> links.length))
    this.fetchLinksFromServer();
    this._persist = persistState(this._store, {
      key: storeName,
      storage: localStorageStrategy,
    });
  }

  /**
   *
   * @returns a store of Link idKey not necessary but makes sense
   */
  private createStore(): typeof store {
    const store = createStore(
      { name: 'linkStore' },
      withEntities<Link>({ idKey: 'id' })
    );
    return store;
  }

  /**
   *
   * @param newLink One Link const id / const url
   */
  addLink(newLink: Link) {
    // adds locally
    this._store.update(addEntities(newLink));
    // adds on serv
    this._linkStateService
      .addLinksToServer$(newLink)
      .pipe(
        tap((link) => {
          this.links.push(link);
          console.log(this.links$);
        })
      )
      .subscribe();
  }

  /**
   *
   * @returns selects all entities in elf's store
   */
  getLinksFromStore$() {
    return this._store.pipe(selectAllEntities());
  }

  /**
   *
   * @param id
   * @returns one entity from id
   */
  getLinkFromStore(id: string) {
    return this._store.pipe(selectEntity(id));
  }

  /**
   * delete one entity from id
   * @param id
   */
  deleteLink(id: string) {
    // delete locally
    this._store.update(deleteEntities(id));
    // delete onserver
    // const pushDelete$ = 
    this._linkStateService.deleteLinkFromServer$(id).subscribe((link) => {
      this.links.push(link);
    });
    // pushDelete$.unsubscribe();
  }

  /**
   * Fetches all data from the get data (template via <T>) and retrives Links from it
   */
  fetchLinksFromServer() {
    this._linkStateService.getDataFromServer$<Link>().subscribe((links) => {
      this.links = links;
      // update local store
      this._store.update(setEntities(this.links));
    });
  }

  /**
   *
   * @returns the number of entities in store (elf)
   */
  getLinksCountFromStore() {
    return this._store.query(getEntitiesCount());
  }

  /**Update locally (elf) & on server (calling the method stocked in service)
   *
   * @param id genérée par Guid dans le component Create
   * @param updatedLink Objet complet
   */
  updateLink(id: string, updatedLink: Link) {
    // update onserver
    this._linkStateService
      .updateLinkOnServer$(id, updatedLink)
      .subscribe((UpdatedLink) => (this.links$ = UpdatedLink));
    console.log(updatedLink);
    // update locally
    this._store.update(updateEntities(id, { url: updatedLink.url }));
    this.goBack();
  }

  /**
   * goes one step behind in history
   */
  goBack(): void {
    this._location.back();
  }
}
