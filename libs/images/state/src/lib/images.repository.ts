import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { createStore } from '@ngneat/elf';
import {
  addEntities,
  deleteEntities,
  getEntitiesCount,
  selectAllEntities,
  selectEntity,
  setEntities,
  updateEntities,
  withEntities,
} from '@ngneat/elf-entities';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';
import { Observable, tap, map } from 'rxjs';
import { ImagesStateService } from './images-state.service';

const storeName = 'images';

export interface ImageData {
  id: string;
  name: string;
}
export interface ImageFile{
  id: string;
  file: File;
  name: string
}

@Injectable({ providedIn: 'root' })
export class ImagesRepository {
  images: ImageData[] = [];
  images$: Observable<ImageData[]>;
  imageFiles: ImageFile[]= [];
  // imageFile$: Observable<ImageFile>
  _imageToShow : any;
  _isImageLoading: any;
  // counter$: Observable<number>;
  private _storeImages;
  private _persist;



  constructor(
    private _imageStateService: ImagesStateService,
    private _location: Location,
  ) {
    this._storeImages = this.createStore();
    this.images$ = this._storeImages.pipe(selectAllEntities());
    // this.counter$ = this.images$.pipe(map((images)=> images.length))
    this.fetchimagesFromServer();
    this._persist = persistState(this._storeImages, {
      key: storeName,
      storage: localStorageStrategy,
    });
  }

  /**
   *
   * @returns a store of Image idKey not necessary but makes sense
   */
  private createStore(): typeof store {
    const store = createStore(
      { name: 'imageStore' },
      withEntities<ImageData>({ idKey: 'id' })
    );
    return store;
  }

  /**
   *
   * @param newImage One Image const id / const name
   */
  addImage(newFile: ImageFile, newImage : ImageData) {
    console.log(newFile)
    // adds locally
    this._storeImages.update(addEntities(newImage));
    // adds on serv
    this._imageStateService
      .addImageToServer$(newFile)
      .pipe(
        tap((newFile) => {
          this.imageFiles.push(newFile);
        })
      )
      .subscribe();
  }
  /**
   *
   * @returns selects all entities in elf's store
   */
  getImagesFromStore$() {
    return this._storeImages.pipe(selectAllEntities());
  }
  /**
   *
   * @param id
   * @returns one entity from id
   */
  getImageFromStore(id: string) {
    return this._storeImages.pipe(selectEntity(id));
  }
  /**
   * delete one entity from id
   * @param id
   */
  deleteImage(id: string) {
    // delete locally
    this._storeImages.update(deleteEntities(id));
    // delete onserver
    // const pushDelete$ =
    this._imageStateService.deleteImageFromServer$(id).subscribe((image) => {
      this.images.push(image);
    });
    // pushDelete$.unsubscribe();
  }
  /**
   * Fetches all data from the get data (template via <T>) and retrives Images from it
   */
  fetchimagesFromServer() {
    this._imageStateService.getDataFromServer$<ImageData>().subscribe((images) => {
      this.images = images;
      // update local store
      this._storeImages.update(setEntities(this.images));
    });
  }

  /**
   *
   * @returns the number of entities in store (elf)
   */
  getImagesCountFromStore() {
    return this._storeImages.query(getEntitiesCount());
  }

  /**Update locally (elf) & on server (calling the method stocked in service)
   *
   * @param id genérée par Guid dans le component Create
   * @param updatedImage Objet complet
   */
  updateImage(id: string, updatedImage: ImageData) {
    // update onserver
    this._imageStateService
      .updateImageOnServer$(id, updatedImage)
      .subscribe((UpdatedImage) => (this.images$ = UpdatedImage));
    console.log(updatedImage);
    // update locally
    this._storeImages.update(updateEntities(id, { name: updatedImage.name }));
    this.goBack();
  }
  /**
   * goes one step behind in history
   */
  goBack(): void {
    this._location.back();
  }

}
