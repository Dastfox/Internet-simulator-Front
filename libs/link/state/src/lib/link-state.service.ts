import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Link } from '@front-nx/link/state';


@Injectable({ providedIn: 'root' })
export class LinkStateService {
  private _linkUrl = 'http://localhost:8000/'; // URL to web api

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
 * @returns Link corresponding to id (guid)
 */
  getLinkFromServer(id: string): Observable<Link[]> {
    const url = `${this._linkUrl}details/${id}`;
    return this._http.get<Link[]>(url);
  }

  /**
   * gets all Data
   * @returns 
   */
  getDataFromServer<T>(): Observable<T[]> {
    return this._http.get<T[]>(this._linkUrl);
  }

  /**
   * 
   * @param link (id: str, url:str)
   * @returns a post method in the back
   */
  addLinksToServer(link: Link): Observable<Link> {
    return this._http.post<Link>(this._linkUrl, link, this.httpOptions);
  }
  /**
   * 
   * @param id 
   * @returns a delete method in the back
   */
  deleteLinkFromServer(id: string): Observable<Link> {
    const url = `${this._linkUrl}details/${id}`;
    return this._http.delete<Link>(url, this.httpOptions);
  }

  /**
   * 
   * @param id for url location
   * @param UpdatedLink object with new url
   * @returns a patch method in the back
   */
  updateLinkOnServer( id: string, UpdatedLink: Link): Observable<any> {
    return this._http.patch(`${this._linkUrl}details/${id}`, UpdatedLink, this.httpOptions);
  }
}
