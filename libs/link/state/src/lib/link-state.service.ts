import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Link } from '@front-nx/link/state';



@Injectable({ providedIn: 'root' })
export class LinkStateService {

  private linkUrl = 'http://localhost:8000/';  // URL to web api

  httpOptions = {
    
    headers:
    
    new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Method': "*",

   })

  };

  constructor(
    private http: HttpClient
    ){}
    

  /** GET link from the server */
  getlink(): Observable<Link[]> {
    return this.http.get<Link[]>(this.linkUrl)
      .pipe(
        catchError(this.handleError<Link[]>('getlink', []))
      );
  }

  /** GET Link by id. Return `undefined` when id not found */
  getLinkNo404<Data>(id: number): Observable<Link> {
    const url = `${this.linkUrl}/?id=${id}`;
    return this.http.get<Link[]>(url)
      .pipe(
        map(link => link[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
        }),
        catchError(this.handleError<Link>(`getLink id=${id}`))
      );
  }

  /** GET Link by id. Will 404 if id not found */
  getLink(id: number): Observable<Link> {
    const url = `${this.linkUrl}/${id}`;
    return this.http.get<Link>(url).pipe(
      catchError(this.handleError<Link>(`getLink id=${id}`))
    );
  }


  // /add a new Link to the server */
  addLink(Link: Link): Observable<Link> {
    return this.http.post<Link>(this.linkUrl, Link, this.httpOptions).pipe(
      catchError(this.handleError<Link>('addLink'))
    );
  }

  // delete the Link 
  deleteLink(id: number): Observable<Link> {
    const url = `${this.linkUrl}/${id}`;

    return this.http.delete<Link>(url, this.httpOptions).pipe(
     catchError(this.handleError<Link>('deleteLink'))
    );
  }

  /** Patch: update the Link on the server */
  // update_Link(Link: Link, id: number, image: string): Observable<any> {
  //   return this.http.patch(`${this.linkUrl}/${id}`, Link, this.httpOptions).pipe(
  //     catchError(this.handleError<any>('updateLink'))
  //   );
  // }




  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  }
