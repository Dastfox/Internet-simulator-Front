import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


export interface Link {
  id: number;
  url : string;
}

@NgModule({
  imports: [CommonModule],
})

@Injectable({ providedIn: 'root' })
export class LinkRepository {

  private linkUrl = 'http://localhost:8000/';  // URL to web api

  httpOptions = {
    
    headers:
    
    new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Method': "*",

   })

  };
  constructor(private http: HttpClient ){
  }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }    

    }
