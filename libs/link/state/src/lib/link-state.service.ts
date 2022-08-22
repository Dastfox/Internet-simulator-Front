import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Link } from '@front-nx/link/state';

@Injectable({ providedIn: 'root' })
export class LinkStateService {
  private linkUrl = 'http://localhost:8000/'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Method': '*',
    }),
  };

  constructor(private http: HttpClient) {}

  getLinkFromServer(id: string): Observable<Link[]> {
    const url = `${this.linkUrl}details/${id}`;
    return this.http.get<Link[]>(url);
  }

  getDataFromServer<T>(): Observable<T[]> {
    return this.http.get<T[]>(this.linkUrl);
  }

  addLinksFromServer(link: Link): Observable<Link> {
    return this.http.post<Link>(this.linkUrl, link, this.httpOptions);
  }

  deleteLinkFromServer(id: string): Observable<Link> {
    const url = `${this.linkUrl}details/${id}`;
    return this.http.delete<Link>(url, this.httpOptions);
  }
  updateLinkOnServer( id: string, UpdatedLink: Link): Observable<any> {
    return this.http.patch(`${this.linkUrl}details/${id}`, UpdatedLink, this.httpOptions);
  }
}
