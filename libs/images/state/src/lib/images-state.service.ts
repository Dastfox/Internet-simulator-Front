import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { ImageData, ImageFile } from '@front-nx/images/state';

@Injectable({ providedIn: 'root' })
export class ImagesStateService {
  private _imageUrl = 'http://localhost:8000/files'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Method': '*',
    }),
  };

  constructor(private _http: HttpClient) {}
  /**
   *
   * @param id
   * @returns image corresponding to id (guid)
   */
  getImageFromServer$(id: string): Observable<ImageData[]> {
    const url = `${this._imageUrl}/${id}`;
    return this._http.get<ImageData[]>(`${url}/`);
  }

  /**
   * gets all Data
   * @returns
   */
  getDataFromServer$<T>(): Observable<T[]> {
    return this._http.get<T[]>(this._imageUrl);
  }

  getImagebyIdFromServer(id: string): Observable<Blob> {
    const url = `${this._imageUrl}/${id}/`;
    return this._http.get(url, { responseType: 'blob' });
  }

  /**
   *
   * @param image (id: str, name:str)
   * @returns a post method in the back
   */
  addImageToServer$(formData: FormData): Observable<any> {;
    const guidRandomID = Guid.create();
    const id = guidRandomID.toString();
    const imageWithId = {formData: formData, id: id}
    console.log( imageWithId);
    return this._http.post(this._imageUrl, formData);
  }
  /**
   *
   * @param id
   * @returns a delete method in the back
   */
  deleteImageFromServer$(id: string): Observable<ImageData> {
    const url = `${this._imageUrl}/${id}`;
    return this._http.delete<ImageData>(url, this.httpOptions);
  }

  /**
   *
   * @param id for name location
   * @param Updatedimage object with new name
   * @returns a patch method in the back
   */
  updateImageOnServer$(id: string, UpdatedImage: ImageData): Observable<any> {
    return this._http.patch(
      `${this._imageUrl}details/${id}`,
      UpdatedImage,
      this.httpOptions
    );
  }
}
