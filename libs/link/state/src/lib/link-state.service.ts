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

  getLinksFS(): Observable<Link[]> {
    return this.http.get<Link[]>(this.linkUrl);
  }

  addLinksFS(link: Link): Observable<Link> {
    return this.http.post<Link>(this.linkUrl, link, this.httpOptions);
  }

  deleteLinkFS(Guid: string): Observable<Link> {
    return this.http.delete<Link>(Guid, this.httpOptions);
  }
}
