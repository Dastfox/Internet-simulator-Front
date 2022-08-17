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
    

  }